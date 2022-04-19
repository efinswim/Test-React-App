import React, {useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import AddedButton from "./components/UI/button/AddedButton";
import CustomInput from "./components/UI/input/CustomInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'Pyton', body: 'Description'},
    {id: 3, title: 'Ruby', body: 'Description'},
    {id: 4, title: 'Java', body: 'Description'},
    {id: 5, title: 'Flutter', body: 'Description'},
  ])

  const [title, setTitle] = useState([''])

  const [body, setBody] = useState([''])

  const addNewPost = () => {

  }

  return (
    <div className="App">
      <form>
        <CustomInput type="text" placeholder="Название поста"/>
        <CustomInput type="text" placeholder="Описание поста"/>
        <AddedButton onClick={addNewPost}>Создать пост</AddedButton>
      </form>
      <PostList posts={posts} title="Список постов"/>
    </div>
  );
}

export default App;