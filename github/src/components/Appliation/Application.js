import React from "react";

import { Route, Link } from "react-router-dom";

export const Application = () => {
  return (
    <div>
      <Link to="/">Dashboard</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/settings">Settings</Link>

      <Route path="/">This is the dashboard</Route>
      <Route path="/profile">This is the Profile</Route>
      <Route path="/settings">This is the Settings</Route>
    </div>
  );
};
