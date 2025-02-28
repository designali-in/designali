import {siteConfig} from "@/config/site";

const fetcher = async <JSON>(
  input: string,
  init?: RequestInit,
): Promise<JSON> => {
  const fetchURL =
    process.env.NODE_ENV === "test" ? `${siteConfig.url}${input}` : input;

  const res = await fetch(fetchURL, init);
  return res.json() as Promise<JSON>;
};

export default fetcher;
