export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface PostsState {
  posts: Post[];
  // status: "pending" | "loading" | "success" | "failded";
  loading: boolean;
  error: string | null;
}
