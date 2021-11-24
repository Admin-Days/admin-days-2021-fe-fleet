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
import JobfairApply from "./screens/Jobfair/Apply";
import JobFairHub from "./screens/Jobfair/JobFairHub";
import CompanyVisit from "./screens/Jobfair/CompanyVisit";
import CompanyPresentation from "./screens/Jobfair/CompanyPresentation";
import Company from "./screens/Jobfair/Company";

import { AuthWrapper } from "./contexts/AuthContext";

import firebaseConfig from "./utils/firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import GrandClosing from "./screens/GrandClosing";
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
            path="/grand-closing"
            render={() => (
              <Page>
                <GrandClosing />
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
            exact
            path="/jobfair/hub"
            render={() => (
              <Page>
                <JobFairHub />
              </Page>
            )}
          />

          <Route
            exact
            path="/jobfair/company-visit/:companyId"
            render={() => (
              <Page>
                <Company />
              </Page>
            )}
          />

          <Route
            exact
            path="/jobfair/company-visit"
            render={() => (
              <Page>
                <CompanyVisit />
              </Page>
            )}
          />

          <Route
            exact
            path="/jobfair/company-presentation"
            render={() => (
              <Page>
                <CompanyPresentation />
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
            path="/jobfair/apply/:jobId"
            render={() => (
              <Page>
                <JobfairApply />
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
