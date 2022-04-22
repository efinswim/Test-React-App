import React, {useEffect, useMemo, useState} from "react";
import './styles/App.css';
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import CustomModal from "./components/UI/modal/CustomModal";
import CustomButton from "./components/UI/button/CustomButton";
import {usePosts} from "./hooks/usePosts"
import axios from "axios";
import PostService from "./API/PostService";

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false)
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fetchPosts() {
    const posts = await PostService.getAll()
    setPosts(posts)
  }

  const removePost = (currentPost) => {
    setPosts(posts.filter(item => item.id !== currentPost.id))
  }

  return (
    <div className="App">
      <CustomButton style={{marginTop: 15}} onClick={() => setModal(true)}>
        Создать пост
      </CustomButton>
      <CustomModal
        visible={modal}
        setVisible={setModal}
      >
        <PostForm create={createPost} />
      </CustomModal>
      <hr style={{margin: '15px'}} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortedAndSearchPosts} title="Список постов" />
    </div>
  );
}

export default App;