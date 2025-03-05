import { createContentlayerPlugin } from "next-contentlayer2"

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/blocks/*": ["./registry/**/*"],
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "t3.gstatic.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "scontent-del1-2.cdninstagram.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "scontent-del1-1.cdninstagram.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "scontent-del2-1.cdninstagram.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "uploadthing.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
    ],
  },
  generateStaticParams: async () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
    const { categories, blocks } = require('./src/data/blocks')
    return {
      staticParams: [
        { path: ['/'] },
        ...categories.map((category) => ({ path: [`/${category}`] })),
        ...blocks.map((block) => ({ path: [`/${block.category}`, block.slug] }))
      ]
    }
  },
  redirects() {
    return [
      {
        source: "/components",
        destination: "/docs/components/accordion",
        permanent: true,
      },
      {
        source: "/docs/components",
        destination: "/docs/components/accordion",
        permanent: true,
      },
      
    ]
  },
};


const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
})

export default withContentlayer(nextConfig)
