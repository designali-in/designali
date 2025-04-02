import Book from "@/components/ui/book";
import { DIcons } from "dicons";

export default function Book01() {
  return (
    <main className="flex flex-col items-center gap-6">
      <Book variant="simple" color="#e7e5e4">
        <div className="p-3 mb-2 grid gap-3">
          <h1 className="font-semibold">
            Your complete platform for the Design.
          </h1>
          <DIcons.Designali className="w-4 h-4" />
        </div>
      </Book>
    </main>
  );
}
