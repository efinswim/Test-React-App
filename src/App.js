import React, {useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import AddedButton from "./components/UI/button/AddedButton";
import CustomInput from "./components/UI/input/CustomInput";
import {useRef} from "react";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'Pyton', body: 'Description'},
    {id: 3, title: 'Ruby', body: 'Description'},
    {id: 4, title: 'Java', body: 'Description'},
    {id: 5, title: 'Flutter', body: 'Description'},
  ])

  const [post, setPost] = useState({
    title: '',
    body: ''
  })

  const addNewPost = (event) => {
    event.preventDefault()

    const newPost = {
      id: Date.now(),
    }

    setPosts([...posts, {...post, id: Date.now()}])

    setPost({
      title: '',
      body: ''
    })
    console.log(newPost)
  }

  return (
    <div className="App">
      <form>
        <CustomInput
          value={post.title}
          onChange={event => setPost({...post, title: event.target.value})}
          type="text"
          placeholder="Название поста"
        />
        <CustomInput
          value={post.body}
          onChange={event => setPost({...post, body: event.target.value})}
          type="text"
          placeholder="Описание поста"
        />
        <AddedButton onClick={addNewPost}>Создать пост</AddedButton>
      </form>
      <PostList posts={posts} title="Список постов"/>
    </div>
  );
}

export default App;