import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing pages layouts
import Home from "./components/Layouts/Home";
import About from "./components/Layouts/About";
import Work from "./components/Layouts/Work";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
