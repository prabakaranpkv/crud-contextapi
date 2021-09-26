import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";
import { Globalprovider } from "./context/GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <Globalprovider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/add">
              <AddUser />
            </Route>
            <Route path="/edit/:id">
              <EditUser />
            </Route>
          </Switch>
        </Router>
      </Globalprovider>
    </div>
  );
}

export default App;
