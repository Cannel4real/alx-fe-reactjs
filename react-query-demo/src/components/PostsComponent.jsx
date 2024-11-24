import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  // Use the updated object form for useQuery
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["posts"],
    queryKey: ["error"],
    queryFn: fetchPosts,
    queryKey: ["cacheTime", "staleTime", "refetchOnWindowFocus", "keepPreviousData"]
  });

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (isError) {
    return <div>Error fetching posts. Please try again later.</div>;
  }

  return (
    <div>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <h2>Posts:</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
