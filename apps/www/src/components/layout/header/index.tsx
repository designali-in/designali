//@ts-nocheck
import Link from "next/link"; 
import { DesignaliIcon } from "../../logo";
import { Header1 } from "./mobile";
import { ThemeToggle } from "../../ui/theme-toggle";
import { Menu } from "./navmenu";
import { DashboardButton, LoginButton } from "./sign-in";
import { getCurrentUser } from "@/lib/session";

export async function Header() {
  const user = await getCurrentUser();
  return (
    <div className="sticky top-2 mx-2 z-50">
    <nav className=" bg-stone-100/60 dark:bg-stone-900/60 backdrop-blur-md backdrop-filter rounded-3xl shadow-md container-wrapper border">
      <div className="flex h-14 px-2 justify-between items-center">
        <div className="flex flex-1 items-center">
          <Link
            aria-label="Logo"
            href="/"
            className="flex pl-3 font-semibold items-center gap-2 justify-center"
          >
            <DesignaliIcon className="size-6" fill="currentColor" />
          </Link>
          <Menu/>
        </div>
        
        <div>
          <div className="flex gap-2 items-center">
            <ThemeToggle/>
            <Header1 user={user} />
            <DashboardButton />
            <LoginButton />
          </div>
        </div>
      </div>
      <div className="relative flex flex-1 items-center">
         
      </div>
    </nav>
    </div>
  );
}
