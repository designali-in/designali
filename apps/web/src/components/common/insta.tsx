"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const token = process.env.INSTAGRAM_KEY;
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
    <div className="grid grid-cols-3 gap-1 md:grid-cols-5">
      {posts.slice(5).map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {post.media_type === "IMAGE" ||
          post.media_type === "CAROUSEL_ALBUM" ? (
            <img src={post.media_url} alt="Instagram Post" />
          ) : post.media_type === "VIDEO" ? (
            <video className="h-auto" src={post.media_url} controls />
          ) : null}
        </a>
      ))}
    </div>
  );
};

export default InstagramFeed;
