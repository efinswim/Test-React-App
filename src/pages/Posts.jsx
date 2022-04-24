import React, {useEffect, useMemo, useState} from "react";
import '../styles/App.css';
import {useFetching} from "../hooks/useFetching";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import Loader from "../components/UI/loader/Loader";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import CustomModal from "../components/UI/modal/CustomModal";
import CustomButton from "../components/UI/button/CustomButton";

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit));
  })

  useEffect(() => {
    fetchPosts()
  }, [page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (currentPost) => {
    setPosts(posts.filter(item => item.id !== currentPost.id))
  }

  const changePage = (page) => {
    setPage(page)
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
      {postError &&
        <h1>Error ${postError}</h1>
      }
      {isPostLoading
        ? <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '50px'}}
        >
          <Loader />
        </div>
        : <PostList remove={removePost} posts={sortedAndSearchPosts} title="Список постов" />
      }
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Posts;