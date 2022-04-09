import { useEffect, useState } from "react";

const LSPostsKey = "posts";

const usePosts = () => {
  const [posts, setPosts] = useState([]);

  const createPost = async (input, topic, image,  tags) => {
    const newPost = {
      id: Date.now(),
      input,
      topic,
      image,
      tags,
    };
    setPosts((prev) => [...prev, newPost]);
  };



  const deletePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  const clearAllPost = () => {
    setPosts([]);
  };

  const [viewModal, setViewModal] = useState(false)
   

  const openModal = () => {
    setViewModal(true)
  }

  const closeModal = () => {
    setViewModal(false)
  }

  
  useEffect(() => {
    const dataFromLS = localStorage.getItem(LSPostsKey);
    
    if (dataFromLS) {
      setPosts(JSON.parse(dataFromLS));
    } 
  }, []);

  useEffect(() => {
    localStorage.setItem(LSPostsKey, JSON.stringify(posts));
  }, [posts]);
  

	return {
		posts,
		createPost,
		deletePost,
		clearAllPost,
    openModal,
    closeModal,
    viewModal,
    LSPostsKey, 
	}
};

export default usePosts
