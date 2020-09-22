import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import Card from '../components/Card';

const Home = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    axios.get(process.env.REACT_APP_URL_API).then(({ data }) => setPosts(data));
  }, []);

  if (!posts) return <Loading />;

  return posts.map((post) => (
    <Card
      key={post._id}
      title={post.title}
      description={post.description}
    />
  ));
};

export default Home;
