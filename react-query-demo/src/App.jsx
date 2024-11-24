import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";

// Initialize Query Client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div>
      <h1>React Query Demo: Fetching Posts</h1>
      <PostsComponent />
    </div>
  </QueryClientProvider>
);

export default App;