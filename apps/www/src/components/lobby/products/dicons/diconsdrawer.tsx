 

"use client";

import React from "react";
import { DIcons } from "dicons";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface SideIconProps {
  settings: any;
}

export const DIconsDrawer = ({ settings }: SideIconProps) => {
  return (
    <main className={""}>
      <div className="flex justify-center gap-2">
        <div>
          <Drawer>
            <DrawerTrigger className="border px-4 rounded-2xl py-1.5">
              Open
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Coming Soon</DrawerTitle>
                <DrawerDescription>
                 Loading...
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter> 
               
                <DrawerClose>
                Cancel
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </main>
  );
};
