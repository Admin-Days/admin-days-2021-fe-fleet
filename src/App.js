import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "react-dates/lib/css/_datepicker.css";
import "./styles/app.sass";
import Page from "./components/Page";
import GrandOpening from "./screens/GrandOpening";
import Landing from "./screens/Landing";
import Webinar from "./screens/Webinar";

import { AuthWrapper } from "./contexts/AuthContext";

import firebaseConfig from "./utils/firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";

initializeApp(firebaseConfig);
const auth = getAuth();
signInAnonymously(auth);

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Page notAuthorized={true}>
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
    </AuthWrapper>
  );
}

export default App;
