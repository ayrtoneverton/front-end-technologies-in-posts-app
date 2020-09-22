import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Typography, TextField, Button } from '@material-ui/core';
import TextEditor from '../components/TextEditor';
import Loading from '../components/Loading';

const Container = styled.div`
  & > * {
    margin: .6rem 0 .2rem 0;
  }
`;
const Actions = styled.div`
  margin-top: 1rem;

  & > * {
    margin-right: .6rem;
  }
`;

const Post = () => {
  const { id } = useParams();
  const isUpdate = id !== 'new';
  const [post, setPost] = useState({});

  useEffect(() => {
    if (isUpdate) axios.get(process.env.REACT_APP_URL_API + id).then(({ data }) => setPost(data));
  }, [id, isUpdate]);

  if (isUpdate && !post._id) return <Loading />;

  const save = async () => {
    if (!(post.title && post.description && post.body)) {
      return alert('All field!');
    }
    if (isUpdate) {
      post._id = undefined;
      await axios.put(process.env.REACT_APP_URL_API + id, post);
    } else {
      await axios.post(process.env.REACT_APP_URL_API, post);
    }
    window.history.back();
  };

  return (
    <Container>
      <Typography variant="h3" component="h1">
        {isUpdate ? 'Update Post' : 'Create Post'}
      </Typography>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        defaultValue={post.title || ''}
        onChange={(e) => { post.title = e.target.value; }}
      />
      <TextField
        label="Description"
        variant="outlined"
        multiline
        rows={2}
        rowsMax={5}
        fullWidth
        defaultValue={post.description || ''}
        onChange={(e) => { post.description = e.target.value; }}
      />
      <TextEditor
        placeholder="Post body" 
        defaultValue={post.body || ''}
        onChange={(value) => { post.body = value; }}
      />
      <Actions>
        <Button variant="contained" color="primary" onClick={save}>Save</Button>
        <Button variant="contained" onClick={() => window.history.back()}>Cancel</Button>
      </Actions>
    </Container>
  );
};

export default Post;
