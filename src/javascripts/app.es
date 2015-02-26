import React from "react";
import {RouteHandler} from "react-router";

import Navigation from "./components/navigation.es"

export default React.createClass({
  render: function() {
    return (
      <div>
        <Navigation />
        <RouteHandler />
      </div>
    )
  }
});
