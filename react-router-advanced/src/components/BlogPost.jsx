import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams();

  return (
    <div>
      <h1>Blog Post</h1>
      <p>Post ID: {postId}</p>
    </div>
  );
}

export default BlogPost;
