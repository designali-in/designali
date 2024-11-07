interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="">
      <main className="mx-auto flex-1 overflow-hidden">{children}</main>
    </div>
  );
}
