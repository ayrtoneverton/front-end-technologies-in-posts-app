import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { ShowText } from '../components/TextEditor';
import Loading from '../components/Loading';

const View = () => {
  const { id } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    axios.get(process.env.REACT_APP_URL_API + id).then(({ data }) => setPost(data));
  }, [id]);

  if (!post) return <Loading />;

  return (
    <>
      <Typography variant="h3" component="h1">{post.title}</Typography>
      <ShowText text={post.body} style={{ margin: '1.5rem -15px' }} />
    </>
  );
};

export default View;
