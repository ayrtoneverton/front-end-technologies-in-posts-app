import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Container, Button, Divider } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import View from './View';

const GlobalStyle = createGlobalStyle`
	html {
		font-family: sans-serif;
	}
`;

const Menu = styled.nav`
  margin-top: 3rem;

  & > * {
    margin: 0 .5rem .5rem 0;
  }
`;

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <NotificationContainer />
    <Container maxWidth="md" fixed>
      <Menu>
        <Button variant="contained" color="primary" href="/">Home</Button>
        <Button variant="contained" color="primary" href="/post/new">New Post</Button>
      </Menu>
      <Divider style={{ marginBottom: '2rem' }} />
      <Switch>
          <Route path="/post/:id">
            <Post />
          </Route>
          <Route path="/view/:id">
            <View />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
  </BrowserRouter>
);

export default App;
