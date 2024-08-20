import { Post } from "../../types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { postApi } from "../../api/post";

export const fetchPosts = createAsyncThunk<
  Post[],
  void,
  { rejectValue: string }
>("posts/fetchPosts", async (_, { rejectWithValue }) => {
  try {
    const res = await postApi.fetchPosts();
    return res;
  } catch (err) {
    return rejectWithValue(
      err instanceof Error ? err.message : "An unknown error occurred"
    );
  }
});
export const addPost = createAsyncThunk<
  Post,
  Omit<Post, "id">,
  { rejectValue: string }
>("posts/addPost", async (post, { rejectWithValue }) => {
  try {
    const res = await postApi.addPost(post);
    return res;
  } catch (err) {
    return rejectWithValue(
      err instanceof Error ? err.message : "An unknown error occurred"
    );
  }
});
