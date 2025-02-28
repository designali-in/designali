//@ts-nocheck
"use client";

import type { DeletePostValidatorType } from "@/lib/validations/community";
import type { ExtendedPost } from "@/types/global";
import type { FC } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { DIcons } from "dicons";

import {siteConfig} from "@/config/site";
import { toast } from "@/components/ui/use-toast";
import { useAuthToast } from "@/hooks/useAuthToast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface PostDropdownProps {
  children: React.ReactNode;
  post: Pick<ExtendedPost, "id" | "creator" | "community">;
  sessionId: string;
}

const PostDropdown: FC<PostDropdownProps> = ({ children, post, sessionId }) => {
  const router = useRouter();
  const pathname = usePathname();

  const { endErrorToast, loginToast } = useAuthToast();

  const { mutate: deletePost } = useMutation({
    mutationFn: async () => {
      const payload: DeletePostValidatorType = {
        postId: post.id,
        creatorId: post.creator.id,
      };

      const { data } = await axios.post("/api/post/delete", payload);

      return data;
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const statusCode = error.response.status;
        if (statusCode === 401) {
          return loginToast();
        }
        if (statusCode === 404) {
          return toast({
            title: "Error!",
            description: "Post does not exist.",
            variant: "destructive",
          });
        }
        if (statusCode === 403) {
          return toast({
            title: "Forbidden",
            description: "You are not authorized to delete this post.",
            variant: "destructive",
          });
        }
      }

      endErrorToast();
    },
    onSuccess: () => {
      router.push(`/community/${post.community.category}/${post.community.id}`);
      router.refresh();
      toast({
        title: "Success!",
        description: "Post deleted successfully.",
      });
    },
    onMutate: () => {
      toast({
        title: "Please wait",
        description: "We are deleting your post.",
      });
    },
  });

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(`${siteConfig.url}${pathname}`);

      toast({
        title: "Success!",
        description: "Link copied to clipboard.",
      });
    } catch (error) {
      toast({
        title: "Error!",
        description: "Could not copy to clipboard.",
        variant: "destructive",
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleShare} className="cursor-pointer">
          <div className="flex items-center gap-x-2">
            <DIcons.Share className="h-4 w-4" />
            Share
          </div>
        </DropdownMenuItem>
        {post.creator.id === sessionId && (
          <DropdownMenuItem
            onClick={() => deletePost()}
            className="cursor-pointer"
          >
            <div className="flex items-center gap-x-2">
              <DIcons.Delete className="h-4 w-4" />
              Delete
            </div>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PostDropdown;
