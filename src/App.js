import React, {useState} from "react";
import './styles/App.css';
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'Pyton', body: 'Description'},
    {id: 3, title: 'Ruby', body: 'Description'},
    {id: 4, title: 'Java', body: 'Description'},
    {id: 5, title: 'Flutter', body: 'Description'},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (currentPost) => {
    setPosts(posts.filter(item => item.id !== currentPost.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      {
        posts.length === 0 ?
          <h1>Нет постов мой друг, к сожалению</h1> :
          <PostList remove={removePost} posts={posts} title="Список постов"/>
      }
    </div>
  );
}

export default App;