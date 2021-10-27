import firebaseConfig from "./firebaseConfig";
import { getApps, initializeApp } from "firebase/app";
import {
  EmailAuthProvider,
  getAuth,
  signOut,
  linkWithCredential,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

if (!getApps.length) initializeApp(firebaseConfig);
const auth = getAuth();

function subscribeUser(callback) {
  onAuthStateChanged(auth, callback);
}

function authSignInEmail(email, password, callback) {
  // callback: (result: string, user: firebase.default.User, error: string) => void
  let user = auth.currentUser;

  // Currently not anonymous user.
  if (user && !user.isAnonymous) {
    callback("Already Signed In", user, null);
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
      callback("Sign In Success", user, null);
    })
    .catch((e) => {
      callback("Sign In Error", null, e);
    });
}

function authSignUpEmail(email, password, callback) {
  // callback: (result: string, user: firebase.default.User) => void
  let user = auth.currentUser;

  // Currently not anonymous user.
  if (user && !user.isAnonymous) {
    callback("Already Signed In", user, null);
    return;
  }

  // Currently anonymous user.
  if (user) {
    const credential = EmailAuthProvider.credential(email, password);
    linkWithCredential(auth, user, credential)
      .then((userCredential) => {
        user = userCredential.user;
        callback("Sign Up Success", user);
      })
      .catch((e) => {
        console.log(e);
        callback("Sign Up Error", null);
      });
  } else {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        user = userCredential.user;
        callback("Sign Up Success", user);
      })
      .catch((e) => {
        console.log(e);
        callback("Sign Up Error", null);
      });
  }
}

function authSignOut(callback) {
  // callback: (result: string) => void
  let user = auth.currentUser;

  if (user && !user.isAnonymous) {
    signOut(auth)
      .then(() => {
        callback("Sign Out Success");
      })
      .catch(() => {
        callback("Sign Out Error");
      });
  } else {
    callback("Not Yet Signed In");
  }
}

export { subscribeUser, authSignUpEmail, authSignInEmail, authSignOut };
