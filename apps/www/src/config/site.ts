import type { IconDescriptor } from "next/dist/lib/metadata/types/metadata-types";

interface Site {
  url: string;
  title: string;
  name: string;
  emails: string;
  keywords: string[];
  titleTemplate: string;
  description: string;
  githubUsername: string;
  socialBanner: string;
  favicons: IconDescriptor[];
}

const prodBaseURL = "https://designali.in";
const devBaseURL = "http://localhost:3000";

const site: Site = {
  url: process.env.NODE_ENV === "production" ? prodBaseURL : devBaseURL,
  title: "Ali Imam",
  name: "Ali Imam",
  emails: "visual.imam@gmail.com",
  keywords: ["Ali Imam", "Next.js", "React", "TypeScript", "Node.js"],
  titleTemplate: "Ali Imam",
  description: "Ali Imam • Art Director",
  socialBanner: "/ali.jpeg",
  githubUsername: "aiartstudio",
  favicons: [
    {
      rel: "icon",
      type: "image/svg",
      sizes: "16x16",
      url: "/favicon.svg",
    },
    {
      rel: "icon",
      type: "image/svg",
      sizes: "32x32",
      url: "/favicon.svg",
    },
  ],
};

export default site;
