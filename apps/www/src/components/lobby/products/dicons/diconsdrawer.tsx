// @ts-nocheck

"use client";

import React from "react";
import { DIcons } from "dicons";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface SideIconProps {
  settings;
}

export const DIconsDrawer = ({ settings }: SideIconProps) => {
  return (
    <main className={""}>
      <div className="flex justify-center gap-2">
        <div>
          <Drawer>
            <DrawerTrigger>
              <Button variant="outline">Open</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="relative mx-auto my-6 mb-40 flex h-full w-full max-w-7xl flex-wrap justify-center">
                <div className="mt-6 p-6 ">
                  <div className="flex items-center justify-center space-x-2"></div>
                </div>

                <DrawerFooter className="absolute right-0">
                  <DrawerClose>
                    <Button size="icon" variant="outline">
                      <DIcons.Close />
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
            <div></div>
          </Drawer>
        </div>
      </div>
    </main>
  );
};
