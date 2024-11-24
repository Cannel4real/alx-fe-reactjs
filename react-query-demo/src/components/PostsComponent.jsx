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
  // Use "error" as the query key in an array
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["error"], // ["error"] as the queryKey
    queryFn: fetchPosts,
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
