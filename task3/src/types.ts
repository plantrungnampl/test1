export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

export interface FetchPostsRequestAction {
  type: typeof FETCH_POSTS_REQUEST;
}

export interface FetchPostsSuccessAction {
  type: typeof FETCH_POSTS_SUCCESS;
  payload: Post[];
}

export interface FetchPostsFailureAction {
  type: typeof FETCH_POSTS_FAILURE;
  payload: string;
}

export interface AddPostAction {
  type: typeof ADD_POST;
  payload: Post;
}

export type PostActionTypes =
  | FetchPostsRequestAction
  | FetchPostsSuccessAction
  | FetchPostsFailureAction
  | AddPostAction;

export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
export const ADD_POST = "ADD_POST";
