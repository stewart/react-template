import React from "react";
import {Link} from "react-router";

export default React.createClass({
  render: function() {
    return (
      <nav>
        <strong>Navigation</strong>

        <div className="links">
          <Link to="screen">Screen</Link>
          <Link to="about">About</Link>
        </div>
      </nav>
    );
  }
});
