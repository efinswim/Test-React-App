import React, {useState} from "react";
import './styles/App.css';
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import CustomSelect from "./components/UI/select/CustomSelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript 1', body: 'Description 1'},
    {id: 2, title: 'Pyton 2', body: 'Description 2'},
    {id: 3, title: 'Ruby', body: 'Description'},
    {id: 4, title: 'Java', body: 'Description'},
    {id: 5, title: 'Flutter', body: 'Description'},
  ])

  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (currentPost) => {
    setPosts(posts.filter(item => item.id !== currentPost.id))
  }

  const sortPosts = (value) => {
    setSelectedSort(value)
    console.log(value)
    setPosts([...posts].sort((a, b) => a[value].localeCompare(b[value])))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px'}} />
      <CustomSelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='Выберите фильтр'
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
        ]}
      />
      {
        posts.length
          ?
          <PostList remove={removePost} posts={posts} title="Список постов"/>
          :
          <h1 style={{textAlign: 'center'}}>Нет постов мой друг, к сожалению</h1>
      }
    </div>
  );
}

export default App;