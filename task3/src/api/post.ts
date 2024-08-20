import axios from "axios";
import { Post } from "../types";
import { API_BASE_URL } from "../constant/constant";

export const postApi = {
  fetchPosts: async (): Promise<Post[]> => {
    const response = await axios.get<Post[]>(`${API_BASE_URL}/posts`);
    return response.data;
  },

  addPost: async (post: Omit<Post, "id">): Promise<Post> => {
    const response = await axios.post<Post>(`${API_BASE_URL}/posts`, post);
    return response.data;
  },
};
