import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Designali",
  description: "Advanced form example using react-hook-form and Zod.",
};

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return <div className="">{children}</div>;
}
