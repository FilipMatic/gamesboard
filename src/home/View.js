import React from "react";
import {
  Switch,
  Route
} from 'react-router-dom';
import Board from '../components/Board';
import BoardBanner from '../components/BoardBanner';
import FriendsTable from '../components/FriendsTable';
import Profile from '../pages/Profile';
import BoardsList from '../pages/BoardsList';
import Dashboard from '../pages/Dashboard';

export default function View() {
  return (
    // Doesn't reload page with <Router></Router> for some reason
    <Switch>
      <Route path="/boards">
        {/* <BoardBanner />
        <Board /> */}
        <BoardsList />
      </Route>
      <Route path="/friends">
        <FriendsTable />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/">
        <Dashboard />
      </Route>
    </Switch>
  );
}