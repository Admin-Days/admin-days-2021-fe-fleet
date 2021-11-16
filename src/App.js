import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "react-dates/lib/css/_datepicker.css";
import "./styles/app.sass";

import Page from "./components/Page";

import GrandOpening from "./screens/GrandOpening";
import Landing from "./screens/Landing";
import Webinar from "./screens/Webinar";
import Signup from "./screens/Signup";
import Workshop from "./screens/Workshop";
import CVClinic from "./screens/CVClinic";

import JobfairLanding from "./screens/Jobfair/Landing";
import JobfairJob from "./screens/Jobfair/Job";

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

          <Route
            exact
            path="/workshop"
            render={() => (
              <Page>
                <Workshop />
              </Page>
            )}
          />

          <Route
            exact
            path="/cv-clinic"
            render={() => (
              <Page>
                <CVClinic />
              </Page>
            )}
          />

          <Route
            exact
            path="/jobfair"
            render={() => (
              <Page>
                <JobfairLanding />
              </Page>
            )}
          />

          <Route
            path="/jobfair/job/:jobId"
            render={() => (
              <Page>
                <JobfairJob />
              </Page>
            )}
          />

          <Route
            exact
            path="/signup"
            render={() => (
              <Page footerHide={true}>
                <Signup />
              </Page>
            )}
          />
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
