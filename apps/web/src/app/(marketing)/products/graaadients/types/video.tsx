import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="px-8">
        <div className="mt-10 grid justify-center gap-4">
          <Link
            href="https://drive.google.com/file/d/1kX8_dZF2P8d8VcjMCsMCmkPQDnAKJTdU/view?usp=sharing"
            target="_blank"
            className=""
          >
            Download Open File
            <span className="sr-only">Buy now</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
