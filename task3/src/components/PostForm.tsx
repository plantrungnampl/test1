import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/actions/postActions";
import { AppDispatch } from "../redux/store/stores";
import { Post } from "../types";

export const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPost: Omit<Post, "id"> = { title, body, userId: 1 };
    dispatch(addPost(newPost));
    setTitle("");
    setBody("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add Post</h2>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Title:
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className=" border rounded w-full py-2 px-3 text-gray-700  "
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="body"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Body:
        </label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          className="border rounded w-full py-2 px-3 text-gray-700 mb-3  h-32"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        >
          Add
        </button>
      </div>
    </form>
  );
};
