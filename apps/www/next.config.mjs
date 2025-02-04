import { fileURLToPath } from "url";
import createJiti from "jiti";
import { createContentlayerPlugin } from "next-contentlayer";

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
createJiti(fileURLToPath(import.meta.url))("./src/env");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: false,
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        http: false,
        https: false,
      };
    }
    config.module.exprContextCritical = false;
    return config;
  },
  transpilePackages: ["@designali/*", "dicons"],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
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
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  experimental: {
    outputFileTracingIncludes: {
      "/blocks/*": ["./registry/**/*"],
    },
    serverComponentsExternalPackages: [
      "@react-email/components",
      "@react-email/render",
    ],
    optimizePackageImports: ["shiki", "@tremor/react"],
    instrumentationHook: true,
  },
  async redirects() {
    return [
      {
        source: "/r",
        destination: "/r/index.json",
        permanent: true,
      },
      {
        source: "/r/index",
        destination: "/r/index.json",
        permanent: true,
      },
      {
        source: "/r/:name((?!index\\.json|styles/).*)",
        destination: "/r/styles/default/:name.json",
        permanent: true,
        missing: [
          {
            type: "query",
            key: "_redirected",
            value: undefined,
          },
        ],
      },
      {
        source: "/marketing/:urlToken",
        has: [
          {
            type: "query",
            key: "urlToken",
          },
        ],
        destination: "/marketing/[urlToken]",
        permanent: false, // Use `true` for 308 redirects if permanent
      },
    ];
  },
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

export default withContentlayer(config);
