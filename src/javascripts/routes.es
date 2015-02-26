import React from "react";
import Router from "react-router";

let {RouteHandler, Route, Redirect, NotFoundRoute} = Router;

// route handlers
import App from "./app.es";

import Screen from "./views/screen.es";
import About  from "./views/about.es";

import NotFound from "./views/not-found.es";

export default (
  <Route name="app" path="/" handler={App}>
    <Route name="screen" handler={Screen} />
    <Route name="about" handler={About} />

    <Redirect from="/" to="screen" />

    <NotFoundRoute handler={NotFound} />
  </Route>
)
