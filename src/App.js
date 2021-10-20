import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-dates/lib/css/_datepicker.css";
import "./styles/app.sass";
import Page from "./components/Page";

import GrandOpening from "./screens/GrandOpening";
import Landing from "./screens/Landing";

import firebaseConfig from "./utils/firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import Webinar from "./screens/Webinar";
import { useEffect } from "react";

initializeApp(firebaseConfig);
const auth = getAuth();
signInAnonymously(auth);

function App() {

  useEffect(() => {
    var classNameDark = "dark-mode";
    var classNameLight = "light-mode";

    function setDarkMode() {
      document.body.classList.remove(classNameLight);
      document.body.classList.add(classNameDark);
    }

    setDarkMode()
  }, [])

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Page>
              <Landing />
            </Page>
          )}
        />
        <Route
          exact
          path="/grand-opening"
          render={() => (
            <Page>
              <GrandOpening />
            </Page>
          )}
        />
         <Route
          exact
          path="/webinar"
          render={() => (
            <Page>
              <Webinar />
            </Page>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
