"use client";

import type { BlogPostCore, GalleryPostCore } from "@/types";
import React from "react";
import { Input } from "@designali/ui/input";
import { Label } from "@designali/ui/label";

import { Icons } from "../icons";
import GalleryCards from "./gallery-cards";
import PostCards from "./post-cards";

interface FilteredBlogPostsProps {
  posts: BlogPostCore[];
}

export const BlogFilteredPosts = (props: FilteredBlogPostsProps) => {
  const { posts } = props;
  const [searchValue, setSearchValue] = React.useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <>
      <div className="relative mb-8">
        <Input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search Blogs"
          aria-label="Search Blogs"
          className="w-full pl-12"
          id="search"
        />
        <Label htmlFor="search">
          <Icons.search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2" />
        </Label>
      </div>
      {filteredPosts.length === 0 && (
        <div className="my-24 text-center text-xl">No blogs found</div>
      )}
      <PostCards posts={filteredPosts} />
    </>
  );
};

interface FilteredGalleryPostsProps {
  posts: GalleryPostCore[];
}

export const GalleryFilteredPosts = (props: FilteredGalleryPostsProps) => {
  const { posts } = props;
  const [searchValue, setSearchValue] = React.useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <>
      <div className="relative mx-auto mb-8 max-w-5xl">
        <Input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search City"
          aria-label="Search City"
          className="w-full pl-12"
          id="search"
        />
        <Label htmlFor="search">
          <Icons.search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2" />
        </Label>
      </div>
      <div className="">
        {filteredPosts.length === 0 && (
          <div className="my-24 text-center text-xl">No City found</div>
        )}
      </div>
      <GalleryCards posts={filteredPosts} />
    </>
  );
};
