import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PostsState, Post } from "../../types";
import { addPost, fetchPosts } from "../actions/postActions";

const initialState: PostsState = {
  posts: [],
  // status: "pending",
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        // state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        // state.status = "success";
        state.loading = false;

        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        // state.status = "failded";
        state.loading = false;

        state.error = action.payload ?? "failded to loading Post ";
      })

      .addCase(addPost.pending, (state) => {
        // state.status = "loading";
        state.loading = true;
      })
      .addCase(addPost.fulfilled, (state, action: PayloadAction<Post>) => {
        // state.status = "success";
        state.loading = false;

        state.posts.unshift(action.payload);
      })
      .addCase(addPost.rejected, (state, aciton) => {
        // state.status = "failded";
        state.loading = false;

        state.error = aciton.payload ?? "failded to add posts";
      });
  },
});
export default postSlice.reducer;
