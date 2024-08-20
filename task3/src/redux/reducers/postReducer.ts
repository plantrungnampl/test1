import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  ADD_POST,
  PostsState,
  PostActionTypes,
} from "../../types";

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

export const postReducer = (
  state = initialState,
  action: PostActionTypes
): PostsState => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case FETCH_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ADD_POST:
      return { ...state, posts: [action.payload, ...state.posts] };
    default:
      return state;
  }
};
