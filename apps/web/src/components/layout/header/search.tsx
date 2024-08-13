"use client";

import * as React from "react";
import { useCopyToClipboard } from "@/hooks/use-copy-clipboard";
import { Button } from "@designali/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@designali/ui/command";

import { Icons } from "../../icons";

type Groups = {
  name: string;
  actions: {
    title: string;
    icon: React.ReactNode;
    onSelect: () => void | Promise<void>;
  }[];
}[];

const CommandMenu = () => {
  const [open, setOpen] = React.useState(false);
  const [copy] = useCopyToClipboard();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((value) => !value);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const openLink = React.useCallback((url: string) => {
    setOpen(false);
    window.open(url, "_blank", "noopener");
  }, []);

  const groups: Groups = [
    {
      name: "General",
      actions: [
        {
          title: "Copy Link",
          icon: <Icons.copy strokeWidth={1} className="mr-3 h-5 w-5" />,
          onSelect: async () => {
            setOpen(false);

            await copy({
              text: window.location.href,
              successMessage: (
                <div className="flex flex-col">
                  <div>Copied</div>
                  <div className="text-sm text-muted-foreground">
                    You can now share it with anyone.
                  </div>
                </div>
              ),
            });
          },
        },
        {
          title: "Download CV",
          icon: <Icons.download strokeWidth={1} className="mr-3 h-5 w-5" />,
          onSelect: () => openLink("/Ali-CV.pdf"),
        },
      ],
    },
    {
      name: "Social",
      actions: [
        {
          title: "Whatsapp",
          icon: <Icons.whatsapp strokeWidth={1} className="mr-3 h-5 w-5" />,
          onSelect: () => openLink("https://wa.me/917678432186"),
        },
        {
          title: "Instagram",
          icon: <Icons.instagram strokeWidth={1} className="mr-3 h-5 w-5" />,
          onSelect: () => openLink("https://www.instagram.com/designali.in/"),
        },
        {
          title: "Linkedin",
          icon: <Icons.linked strokeWidth={1} className="mr-3 h-5 w-5" />,
          onSelect: () =>
            openLink("https://www.linkedin.com/company/designali"),
        },
        {
          title: "Youtube",
          icon: <Icons.youtube strokeWidth={1} className="mr-3 h-5 w-5" />,
          onSelect: () => openLink("https://www.youtube.com/@designali-in"),
        },
        {
          title: "Twitter",
          icon: <Icons.twitterx strokeWidth={1} className="mr-3 h-5 w-5" />,
          onSelect: () => openLink("https://x.com/designali_in"),
        },
        {
          title: "Facebook",
          icon: <Icons.facebook strokeWidth={1} className="mr-3 h-5 w-5" />,
          onSelect: () => openLink("https://www.facebook.com/designali.agency"),
        },
      ],
    },
  ];

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="hidden md:block"
        onClick={() => setOpen(true)}
      >
        <Icons.command strokeWidth={1} className="h-5 w-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {groups.map((group, i) => (
            <React.Fragment key={group.name}>
              <CommandGroup heading={group.name}>
                {group.actions.map((action) => (
                  <CommandItem key={action.title} onSelect={action.onSelect}>
                    {action.icon}
                    {action.title}
                  </CommandItem>
                ))}
              </CommandGroup>
              {i !== groups.length - 1 && <CommandSeparator />}
            </React.Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CommandMenu;
