import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/actions/postActions";
import { RootState } from "../redux/store/stores";
import { AppDispatch } from "../redux/store/stores";
import { Post } from "../types";

export const PostList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, loading, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Posts</h2>
      {posts.length === 0 ? (
        <p className="text-gray-600">no post</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post: Post) => (
            <li
              key={post.id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 ">
                {post.title}
              </h3>
              <p className="text-gray-600">{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
