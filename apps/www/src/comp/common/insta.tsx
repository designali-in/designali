"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/registry/default/designali/ui/skeleton";
import { Button } from "@designali/ui/button";
import axios from "axios";
import { DIcons } from "dicons";

export const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const token =
          "IGQWRNaW9LUG0wY2E4ckNrUGNZAQi0yOFlZAU0FiaWJScVR6RU9BMG1neGx0aER5a1JmWlR5a1FMZAFJ2bEtGV1dIZAVVnMS1DS281Q01lZA1pkSEl5NDJvejNLbDJLSmhCbm1RMGg5YnF5b0RjNWEwSl8wXzNDWHBYYzAZD";
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=${token}`,
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
          <Button variant="ghost" className="w-80 text-xs">
            Do you need any open file, DM me
          </Button>
        </Link>
      </div>
    </div>
  );
};
