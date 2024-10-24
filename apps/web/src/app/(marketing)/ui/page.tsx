import PageTitle from "@/src/components/mdx/page-title";

export const metadata = {
  title: "UI - Designali",
  description: "A design agency with a touch of magic.",
};

export default function HomePage() {
  return (
    <main className="mx-auto my-20 mt-40 max-w-7xl px-6 xl:px-0">
      <PageTitle
        title="Components UI"
        description={` Tailwind CSS colors in HSL, RGB, and HEX formats.`}
      />
    </main>
  );
}
