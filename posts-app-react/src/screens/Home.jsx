import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { NotificationManager } from 'react-notifications';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import Card from '../components/Card';

const Home = () => {
  const [posts, setPosts] = useState();
  const [search, setSearch] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (!posts) axios.get(process.env.REACT_APP_URL_API).then(({ data }) => setPosts(data));
  }, [posts]);

  if (!posts) return <Loading />;

  const remove = async (post) => {
    await axios.delete(process.env.REACT_APP_URL_API + post._id);
    setPosts();
    setSearch('');
    NotificationManager.success(`Post removed successfully!`);
  };

  const resultPosts = posts.filter(
    p => p.title.indexOf(search) >= 0 || p.description.indexOf(search) >= 0
  );

  return (
    <>
      <SearchBar onChange={setSearch} />
      {resultPosts.length ? (
        resultPosts.map((post) => (
          <Card
            key={post._id}
            title={post.title}
            description={post.description}
            onView={() => history.push(`view/${post._id}`)}
            onEdit={() => history.push(`post/${post._id}`)}
            onRemove={() => remove(post)}
          />
        ))
      ) : (
        <Typography variant="h5" component="h3">
          Nothing added yet
        </Typography>
      )}
    </>
  );
};

export default Home;
