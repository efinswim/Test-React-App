import React, {useMemo, useState} from "react";
import './styles/App.css';
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import CustomSelect from "./components/UI/select/CustomSelect";
import CustomInput from "./components/UI/input/CustomInput";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript 1', body: 'Description 1'},
    {id: 2, title: 'Pyton 2', body: 'Description 2'},
    {id: 3, title: 'Ruby', body: 'Description'},
    {id: 4, title: 'Java', body: 'Description'},
    {id: 5, title: 'Flutter', body: 'Description'},
  ])

  const [filter, setFilter] = useState({sort: '', query: ''});


  const sortedPosts = useMemo(() => {
    console.log('Фуекцмя српиел прсис рипаьриаоа')
    if (filter.sort) {
      [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (currentPost) => {
    setPosts(posts.filter(item => item.id !== currentPost.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px'}} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortedAndSearchPosts} title="Список постов" />
    </div>
  );
}

export default App;