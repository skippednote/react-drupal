import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import SessionList from './components/SessionList';
import SessionPage from './components/SessionPage';
import NewSession from './components/NewSession';
import NewsList from './components/NewsList';

const routes = (
  <Route path="/" component={App}>
    <Route path="sessions" component={SessionList} />
    <Route path="sessions/new" component={NewSession} />
    <Route path="sessions/:id" component={SessionPage} />
    <Route path="news" component={NewsList} />
  </Route>
)

export default routes;
