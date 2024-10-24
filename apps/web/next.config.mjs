import { fileURLToPath } from "url";
import createJiti from "jiti";
import { withContentlayer } from "next-contentlayer";

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti("@designali/env");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ["@designali/*", "dicons"],
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    return config;
  },
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
    serverComponentsExternalPackages: [
      "@react-email/components",
      "@react-email/render",
    ],
    optimizePackageImports: ["shiki", "@tremor/react"],
    instrumentationHook: true,
  },
};

// @ts-ignore
export default withContentlayer(config);
