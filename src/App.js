import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import {
  Blog,
  Burger,
  Contact,
  Home,
  NavMenu,
  Portfolio,
  Timeline,
} from "./components";

function App() {
  return (
    <Router>
      <div>
        <NavMenu />
        <Burger />
        <Switch>
          <Route path="/timeline">
            <Timeline />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
