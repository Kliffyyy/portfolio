import fs from 'fs'
import path from 'path'
import { PagesRootDirectory } from './sitemap'

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    metadata[key.trim() as keyof Metadata] = value
  })

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir: any) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

async function getAllFilePathsRecursively(dir:any, fileType:any) {
  let filePaths:any = [];
  const list = await fs.promises.readdir(dir);

  for (const file of list) {
    const filePath = path.resolve(dir, file);
    const stat = await fs.promises.stat(filePath);

    if (stat && stat.isDirectory()) {
      const res = await getAllFilePathsRecursively(filePath, fileType);
      filePaths = filePaths.concat(res);
    } else if (path.extname(file) === fileType) {
      filePaths.push(filePath);
    }
  }

  return filePaths;
}

export async function getPages() {
  const rootDir = `app/${PagesRootDirectory}`;
  // const rootDir = path.join(process.cwd(), 'app', 'pages', 'pages');

  // Check if the directory exists
  try {
    await fs.promises.access(rootDir, fs.constants.F_OK);
  } catch (error) {
    console.error(`Directory does not exist: ${rootDir}`);
    return [];
  }

  const mdxFilePaths = await getAllFilePathsRecursively(rootDir, '.mdx');

  // Process the collected MDX files
  const pages = mdxFilePaths.map((filePath: any) => {
    const { metadata, content } = readMDXFile(filePath);

    const dir = path.dirname(filePath);
    const file = path.basename(filePath);
    // const slug = path.basename(file, path.extname(file));

    // Calculate the slug relative to the root directory
    const relativeFilePath = path.relative(rootDir, filePath);
    const slug = relativeFilePath.replace(new RegExp(`${path.extname(filePath)}$`), ''); // Remove the file extension

    console.log(`
      filepath: ${filePath} 
      dir:      ${dir} 
      file:     ${file}
      slug:     ${slug}
      relative: ${relativeFilePath}
      `)

    return {
      metadata,
      slug,   
      content,
    };
  });

  // log all filepaths found eg. [file1, file2, subdirectory1/file1, subdirectory1/file2, ...]
  // console.log(pages.map((page:any) => page.slug));

  return pages;
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
