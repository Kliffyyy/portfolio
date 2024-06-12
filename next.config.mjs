// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     experimental: {
//         typedRoutes: true,
//       },
// };

// export default nextConfig;

// const withMDX = import('@next/mdx')()
 
/** @type {import('next', '@next/mdx').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  swcMinify: true,
}
 
// export default withMDX(nextConfig)
// export default nextConfig.withMDX
// module.exports = withMDX(nextConfig)
export default nextConfig
