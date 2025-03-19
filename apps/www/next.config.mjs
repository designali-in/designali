import { createContentlayerPlugin } from "next-contentlayer2";

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingIncludes: {
    "/blocks/*": ["./registry/**/*"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com" },
      { hostname: "picsum.photos" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "utfs.io" },
      { protocol: "https", hostname: "t3.gstatic.com" },
      { protocol: "https", hostname: "scontent-del1-2.cdninstagram.com" },
      { protocol: "https", hostname: "scontent-del1-1.cdninstagram.com" },
      { protocol: "https", hostname: "scontent-del2-1.cdninstagram.com" },
      { protocol: "https", hostname: "uploadthing.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
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
    ];
  },
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

export default withContentlayer(nextConfig);