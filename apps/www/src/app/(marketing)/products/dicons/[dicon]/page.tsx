/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { Suspense, useMemo } from "react";
import { usePathname } from "next/navigation";
import DIconsPage from "@/comp/products/dicons";

import {
  Access,
  Account,
  Ai,
  Alert,
  Animals,
  Animations,
  Awards,
  Baby,
  Badge,
  Bell,
  Bookmark,
  Brands,
  Buildings,
  Business,
  Chats,
  Communications,
  Cursors,
  Gaming,
  Homing,
  Mails,
  Maths,
  Shapess,
  Textt,
} from "../../../../../../../../packages/icons/src/index";

const categoryMap = {
  Access,
  Animals,
  Awards,
  Account,
  Ai,
  Alert,
  Animations,
  Baby,
  Brands,
  Bookmark,
  Bell,
  Badge,
  Buildings,
  Business,
  Chats,
  Communications,
  Cursors,
  Gaming,
  Homing,
  Mails,
  Maths,
  Shapess,
  Textt,
};

const DIconsCategory = () => {
  const pathname = usePathname();

  const category = useMemo(() => {
    const matchedCategory = Object.keys(categoryMap).find((categoryKey) =>
      pathname.includes(categoryKey),
    );
    return matchedCategory ? categoryMap[matchedCategory] : null;
  }, [pathname]);

  return (
    <div className="mt-14  border-t">
      <Suspense fallback={<div className="mt-40">Category not found</div>}>
        <DIconsPage Categories={category} />
      </Suspense>
    </div>
  );
};

export default DIconsCategory;
