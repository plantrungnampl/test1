import axios from "axios";
import { Dispatch } from "redux";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  ADD_POST,
  Post,
  PostActionTypes,
} from "../../types";
import { API_URL } from "../../constant/constant";

export const fetchPosts = () => {
  return (dispatch: Dispatch<PostActionTypes>) => {
    dispatch({ type: FETCH_POSTS_REQUEST });
    axios
      .get<Post[]>(API_URL)
      .then((response) => {
        dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_POSTS_FAILURE, payload: error.message });
      });
  };
};

export const addPost = (post: Omit<Post, "id">) => {
  return (dispatch: Dispatch<PostActionTypes>) => {
    axios
      .post<Post>(API_URL, post)
      .then((response) => {
        dispatch({ type: ADD_POST, payload: response.data });
      })
      .catch((error) => {
        console.error("Error adding post:", error);
      });
  };
};
