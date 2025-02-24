/** @type {import('next').NextConfig} */


const nextConfig = {


    output: "export",

  images: {
          domains: ['images.unsplash.com', "media.licdn.com"],
      },

  basePath: "/saferr-ai.github.io",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
};

// const nextConfig = {
//   images: {
//     domains: ['images.unsplash.com', "media.licdn.com"],
// },
// };

export default nextConfig;
