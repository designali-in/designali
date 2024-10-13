"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const InstagramFeed = () => {
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
    <div className="grid grid-cols-3 gap-1 px-6 py-10 md:mb-20 md:grid-cols-6 xl:px-0">
      {posts.slice(0, 12).map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-90"
        >
          {post.media_type === "IMAGE" ||
          post.media_type === "CAROUSEL_ALBUM" ? (
            <img
              width={500}
              height={400}
              src={post.media_url}
              alt="designali"
            />
          ) : post.media_type === "VIDEO" ? (
            <video src={post.media_url} controls />
          ) : null}
        </a>
      ))}
    </div>
  );
};

export default InstagramFeed;
