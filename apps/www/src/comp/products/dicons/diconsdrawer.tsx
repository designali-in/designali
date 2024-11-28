/* eslint-disable @typescript-eslint/no-unsafe-member-access */

"use client";

import React from "react";
import { Button } from "@/registry/default/designali/ui/button";
import { CodeBlock } from "@/src/comp/mdx/layers/code-block";
import { DIcons } from "dicons";

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
            <DrawerTrigger asChild>
              <Button variant="outline">Open</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="relative mx-auto my-6 mb-40 flex h-full w-full max-w-7xl flex-wrap justify-center">
                <div className="mt-6 p-6 ">
                  <div className="flex items-center justify-center space-x-2">
                    <CodeBlock
                      className="mx-auto w-full max-w-xl"
                      title={".tsx"}
                    >{`import { ${settings.icon} } from 'dicons';

const App = () => {
  return (
    <${settings.icon} strokeWidth={${settings.strokeWidth}}/>
  );
};

export default App;`}</CodeBlock>
                  </div>
                </div>

                <DrawerFooter className="absolute right-0">
                  <DrawerClose asChild>
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
