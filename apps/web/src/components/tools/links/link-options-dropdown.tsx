"use client";

import * as React from "react";
import { ProtectedElement } from "@/components/ui/protected-element";
import { ShortLink } from "@designali/db/src/schema";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@designali/ui/dropdown-menu";
import { Icons, iconVariants } from "@designali/ui/icons";
import { type Session } from "next-auth";

import { CustomLinkDialog } from "./custom-link-dialog";
import { DeleteLinkDialog } from "./delete-link-dialog";
import { LinkQRCodeDialog } from "./link-qrcode-dialog";

type LinkOptionsDropdownProps = {
  link: ShortLink;
  session?: Session | null;
};

export const LinkOptionsDropdown = ({
  link,
  session,
}: LinkOptionsDropdownProps) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
  const [isEditLinkDialogOpen, setIsEditLinkDialogOpen] = React.useState(false);
  const [isQRCodeDialogOpen, setIsQRCodeDialogOpen] = React.useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="absolute right-2 top-3 cursor-pointer opacity-50 transition-opacity hover:opacity-100"
            type="button"
          >
            <Icons.MoreVertical className={iconVariants()} />
            <span className="sr-only">Link actions menu</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setIsQRCodeDialogOpen(true)}>
            <Icons.QrCode className={iconVariants({ className: "mr-2" })} />
            QR Code
          </DropdownMenuItem>
          <ProtectedElement
            session={session}
            tooltipMessage="Sign in to edit links"
            renderElement={(disabled) => (
              <DropdownMenuItem
                onClick={() => setIsEditLinkDialogOpen(true)}
                disabled={disabled}
              >
                <Icons.Pencil className={iconVariants({ className: "mr-2" })} />
                Edit
              </DropdownMenuItem>
            )}
          />
          <DropdownMenuItem
            className="text-red-500 focus:bg-red-500/10 focus:text-red-500"
            onClick={() => setIsDeleteDialogOpen(true)}
            disabled={link.slug === "github"}
          >
            <Icons.Trash2 className={iconVariants({ className: "mr-2" })} />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DeleteLinkDialog
        isOpen={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        slug={link.slug}
      />
      <CustomLinkDialog
        open={isEditLinkDialogOpen}
        onOpenChange={setIsEditLinkDialogOpen}
        defaultValues={link}
        isEditing
      />
      <LinkQRCodeDialog
        isOpen={isQRCodeDialogOpen}
        onOpenChange={setIsQRCodeDialogOpen}
        url={link.url}
        slug={link.slug}
      />
    </>
  );
};
