import React from 'react';
import styled from 'styled-components';
import { Container, Button, Divider } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Post from './Post';

const Menu = styled.nav`
  margin-top: 3rem;

  & > * {
    margin: 0 .5rem .5rem 0;
  }
`;

const App = () => (
  <BrowserRouter>
    <Container maxWidth="md" fixed>
      <Menu>
        <Button variant="contained" color="primary" href="/">Home</Button>
        <Button variant="contained" color="primary" href="/post/new">New Post</Button>
      </Menu>
      <Divider />
      <Switch>
          <Route path="/post/:id">
            <Post />
          </Route>
          <Route path="/view/:id">
            {() => 'view'}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
  </BrowserRouter>
);

export default App;
