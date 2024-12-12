"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/registry/default/ui/skeleton";
import { formatUrl } from "@/src/lib/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { DIcons } from "dicons";
import { useDebounce } from "use-debounce";

import { useCopyToClipboard } from "@/hooks/use-copy-clipboard";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

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
  const [query, setQuery] = useState("");
  const router = useRouter();

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

  const [data, setData] = useState<{ id: string; name: string }[]>([]);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery.length > 0) {
      refetch();
    }
  }, [debouncedQuery]);

  const {
    data: queryResults,
    refetch,
    isFetching,
  } = useQuery({
    queryFn: async () => {
      if (!query) return [];

      const trimmedQuery = query.trimEnd();

      const { data } = await axios(`/api/graphic/search?q=${trimmedQuery}`);

      return data as { id: string; name: string }[];
    },
    queryKey: ["search-query"],
    enabled: false, //by default it will not fetch
  });

  useEffect(() => {
    if (!query) {
      setData([]);
      return;
    }

    if (queryResults) {
      setData(queryResults);
    }
  }, [queryResults, query]);

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
          icon: <DIcons.Copy strokeWidth={1} className="mr-3 h-5 w-5" />,
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
          icon: <DIcons.Download strokeWidth={1} className="mr-3 h-5 w-5" />,
          onSelect: () => openLink("/Ali-CV.pdf"),
        },
      ],
    },
    {
      name: "Social",
      actions: [
        {
          title: "Whatsapp",
          icon: <DIcons.WhatsApp strokeWidth={1} className="mr-3 h-5 w-5" />,
          onSelect: () => openLink("https://wa.me/917678432186"),
        },
        {
          title: "Instagram",
          icon: <DIcons.Instagram strokeWidth={1} className="mr-3 h-5 w-5" />,
          onSelect: () => openLink("https://www.instagram.com/designali.in/"),
        },
        {
          title: "Linkedin",
          icon: <DIcons.LinkedIn strokeWidth={1} className="mr-3 h-5 w-5" />,
          onSelect: () =>
            openLink("https://www.linkedin.com/company/designali"),
        },
        {
          title: "Youtube",
          icon: <DIcons.YouTube strokeWidth={1} className="mr-3 h-5 w-5" />,
          onSelect: () => openLink("https://www.youtube.com/@designali-in"),
        },
        {
          title: "Twitter",
          icon: <DIcons.X strokeWidth={1} className="mr-3 h-5 w-5" />,
          onSelect: () => openLink("https://x.com/designali_in"),
        },
        {
          title: "Facebook",
          icon: <DIcons.Facebook strokeWidth={1} className="mr-3 h-5 w-5" />,
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
        className="hidden justify-center md:flex"
        onClick={() => setOpen(true)}
        icon="Command"
      ></Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search graphic..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {isFetching ? (
            <div className="space-y-1 overflow-hidden p-2">
              <Skeleton className="h-8 rounded-sm" />
              <Skeleton className="h-8 rounded-sm" />
            </div>
          ) : (
            data.length > 0 && (
              <CommandGroup heading="Anime">
                {data.map((queryItem) => {
                  const formattedHref = `/graphic/${formatUrl(queryItem.name)}`;

                  return (
                    <a href={formattedHref} key={queryItem.id}>
                      <CommandItem
                        className="cursor-pointer"
                        onSelect={() => {
                          setOpen(false);
                          setQuery("");
                          router.push(formattedHref);
                        }}
                      >
                        {queryItem.name}
                      </CommandItem>
                    </a>
                  );
                })}
              </CommandGroup>
            )
          )}
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
