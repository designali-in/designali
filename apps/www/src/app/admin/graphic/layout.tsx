"use client";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default function Users({ children }: ProtectedLayoutProps) {
  return (
    <div className="">
      <main className=" ">{children}</main>
    </div>
  );
}
