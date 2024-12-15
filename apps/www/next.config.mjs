import { fileURLToPath } from "url";
import createJiti from "jiti";
import { createContentlayerPlugin } from "next-contentlayer";

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
createJiti(fileURLToPath(import.meta.url))("./src/env");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  resolve: {
    fallback: {
      https: false,
      http: false,
    },
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        http: false,
        https: false,
      };
    }

    return config;
  },
  /** Enables hot reloading for local packages without a build step */
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
    ],
    domains: [
      "uploadthing.com",
      "avatars.githubusercontent.com",
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
      "utfs.io",
      "scontent-del1-2.cdninstagram.com",
      "scontent-del1-1.cdninstagram.com",
      "scontent-del2-1.cdninstagram.com",
    ],
  },

  /** We already do linting and typechecking as separate tasks in CI */
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
    return [];
  },
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

export default withContentlayer(config);
