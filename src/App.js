import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/sign-in">Sign-In</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign-Up</Link>
            </li>
            <li>
              <Link to="/manage/links/create">Create Link</Link>
            </li>
            <li>
              <Link to="/manage/links/edit">Edit link</Link>
            </li>
            <li>
              <Link to="/manage/links">Links</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/sign-in"><h1>Sign In</h1></Route>
          <Route path="/sign-up"><h1>Sign Up</h1></Route>
          <Route path="/manage/links/create"><h1>Create Links</h1></Route>
          <Route path="/manage/links/edit"><h1>Edit Links</h1></Route>
          <Route path="/"><h1>Home</h1></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
