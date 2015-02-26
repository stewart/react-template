import React  from "react";
import Router from "react-router";

import routes from "./routes.es";

Router.run(routes, (Handler) => {
  return React.render(<Handler/>, document.querySelector("body > .container"));
});
