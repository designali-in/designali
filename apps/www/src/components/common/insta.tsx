"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import axios from "axios";
import { DIcons } from "dicons";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export const InstagramFeed = () => {
  interface Post {
    id: string;
    media_type: string;
    media_url: string;
    thumbnail_url?: string;
    permalink: string;
  }

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const token =
          "IGQWRNSU9JVEhpaGF4T2JWS3BobHB4NkxidFpBTHdDOVVERkZAnZAWNJN2ctS0R3NmY3V3cybGFRRnBCR255ejV5a1VhYWQycEc0U2dsWGdqZAkQxYmFyYWJjLVluaUZACSklzOVAtQ19lMDhVVk1Jcmtob1Jfc2hhSGMZD";
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=${token}`
        );
        setPosts(response.data.data);
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      }
    };

    fetchInstagramPosts();
  }, []);

  return (
    <div className="grid justify-center md:mb-20">
      <Link
        href={"https://www.instagram.com/designali.in/"}
        target="_blank"
        className="flex justify-center"
      >
        <DIcons.Instagram className="hover:text-ali h-6 w-6" />
      </Link>

      <div className="grid grid-cols-3 gap-1 py-10 md:grid-cols-6">
        {posts.slice(0, 12).map((post) => (
          <Link
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="h-full w-full hover:opacity-90"
          >
            {post.media_type === "IMAGE" ||
            post.media_type === "CAROUSEL_ALBUM" ? (
              <img
                width={400}
                height={300}
                src={post.media_url}
                alt="designali"
              />
            ) : post.media_type === "VIDEO" ? (
              <video
                className="max-h-[140px] w-full object-cover md:max-h-[200px] lg:max-h-[240px] xl:max-h-[396px]"
                src={post.media_url}
              />
            ) : (
              <Skeleton className="h-full w-full" />
            )}
          </Link>
        ))}
      </div>
      <div>
        <Link href={"/products/graaadients"} className="flex justify-center">
          <Button className="w-40">Free Download</Button>
        </Link>
        <Link
          href={"https://www.instagram.com/designali.in/"}
          className="flex justify-center"
          target="_blank"
        >
          <p className="py-3 text-xs">Do you need any open file, DM me</p>
        </Link>
      </div>
    </div>
  );
};
