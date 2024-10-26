"use client";

import type { ShortLink } from "@designali/db/src/schema";
import React, { useState } from "react";
import {
  ResponsiveDialog,
  ResponsiveDialogBody,
  ResponsiveDialogClose,
  ResponsiveDialogContent,
  ResponsiveDialogFooter,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/src/comp/uis/responsive-dialog";
import { Button } from "@designali/ui/button";

import { CustomLinkButton } from "./custom-link-button";
import { CustomLinkForm } from "./custom-link-form";

type CustomLinkDialogProps = (
  | {
      isEditing: boolean;
      defaultValues: ShortLink;
    }
  | {
      isEditing?: undefined;
      defaultValues?: undefined;
    }
) &
  (
    | {
        open: boolean;
        onOpenChange: (isOpen: boolean) => void;
      }
    | {
        open?: undefined;
        onOpenChange?: undefined;
      }
  );

export const CustomLinkDialog = ({
  open = false,
  onOpenChange,
  defaultValues,
  isEditing = false,
}: CustomLinkDialogProps) => {
  const [isOpen, setIsOpen] = useState(open);
  const isControlled = onOpenChange !== undefined;

  const handleOpenChange = (isOpen: boolean) => {
    if (!isControlled) {
      setIsOpen(isOpen);
    }
    onOpenChange(isOpen);
  };

  const openState = isControlled ? open : isOpen;

  return (
    <ResponsiveDialog open={openState} onOpenChange={handleOpenChange}>
      {!isEditing && (
        <ResponsiveDialogTrigger asChild>
          <CustomLinkButton />
        </ResponsiveDialogTrigger>
      )}
      <ResponsiveDialogContent>
        <ResponsiveDialogHeader>
          <ResponsiveDialogTitle>
            {isEditing ? "Edit link" : "Create a new link"}
          </ResponsiveDialogTitle>
        </ResponsiveDialogHeader>
        <ResponsiveDialogBody>
          <CustomLinkForm
            onSetIsDialogOpen={handleOpenChange}
            defaultValues={defaultValues}
            isEditing={isEditing}
          />
        </ResponsiveDialogBody>
        <ResponsiveDialogFooter>
          <ResponsiveDialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </ResponsiveDialogClose>
        </ResponsiveDialogFooter>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
};
