import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "../component/Home/Home";
import Portfolio from "../component/Portfolio/Portfolio";
import About from "../component/About/About";
import Contact from "../component/Contact/Contact";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const openNav = e => {};

function App() {
  return (
    <Router>
      <div>
        <header className="header">
          <div>
            <nav className="navbar navbar-expand-lg navbar-light mt-6">
              <Link className="navbar-brand text-white" to="/">
                  Gadfrey Balacy
              </Link>
              <button
                onClick={openNav}
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link
                      className="nav-link  waves-effect waves-light text-white"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link
                      className="nav-link  waves-effect waves-light text-white"
                      to="/portfolio"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link
                      className="nav-link  waves-effect waves-light text-white"
                      to="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link
                      className="nav-link waves-effect waves-light text-white"
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </div>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
