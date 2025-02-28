import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const Avegra = localFont({
  src: "./Avegra.woff2",
  display: "swap",
});
