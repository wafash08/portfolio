import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import {
  Blog,
  Burger,
  Contact,
  Footer,
  Home,
  NavMenu,
  Portfolio,
  Timeline,
} from "./components";

function App() {
  return (
    <Router>
      <Container>
        <aside>
          <NavMenu />
          <Burger />
          <Footer />
        </aside>
        <main>
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
        </main>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 1100px) {
    flex-direction: row;

    aside {
      width: 20vw;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: sticky;
      top: 0;
      left: 0;
      height: 100vh;
      overflow: hidden;
    }

    nav {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100vh;
    }
    main {
      width: 80vw;
    }
  }
`;
