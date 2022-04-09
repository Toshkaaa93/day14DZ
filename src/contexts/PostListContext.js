import { createContext } from "react";
import usePosts from "../hooks/useTodos";


const PostListContext = createContext();

const PostListProvider = ({ children }) => {
   const { posts, createPost,  deletePost, clearAllPost, LSPostsKey, openModal, closeModal, viewModal} =
    usePosts();
   
  return (
    <PostListContext.Provider
      value={{ posts, createPost, deletePost, clearAllPost, LSPostsKey, openModal, closeModal, viewModal}}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;

export { PostListContext };
