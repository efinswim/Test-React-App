import React from 'react';
import CustomInput from "./UI/input/CustomInput";
import CustomButton from "./UI/button/CustomButton";
import {useState} from "react";

const PostForm = ({create}) => {
  const [post, setPost] = useState({
    title: '',
    body: ''
  })

  const addNewPost = (event) => {
    event.preventDefault()

    const newPost = {
      ...post, id: Date.now(),
    }

    create(newPost)

    setPost({
      title: '',
      body: ''
    })
  }

  return (
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
        <CustomButton onClick={addNewPost}>Создать пост</CustomButton>
      </form>
  );
};

export default PostForm;