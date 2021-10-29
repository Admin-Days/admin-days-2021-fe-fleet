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

async function authSignUpEmail(email, password, callback) {
  // callback: (result: string, user: firebase.default.User) => void
  let user = auth.currentUser;

  // Currently not anonymous user.
  if (user && !user.isAnonymous) {
    callback("Already Signed In", user, null);
    return;
  }

  if (user) {
    await signOut(auth);
  }

  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      callback("Sign Up Success", userCredential.user);
    })
    .catch((e) => {
      console.log(e);
      callback("Sign Up Error", null);
    });

  // Currently anonymous user.
  // if (user) {
  //   const credential = EmailAuthProvider.credential(email, password);
  //   return linkWithCredential(auth, user, credential)
  //     .then((userCredential) => {
  //       callback("Sign Up Success", userCredential.user);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       callback("Sign Up Error", e);
  //     });
  // } else {
  //   return createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       callback("Sign Up Success", userCredential.user);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       callback("Sign Up Error", null);
  //     });
  // }
}

function authSignOut(callback) {
  // callback: (result: string) => void
  let user = auth.currentUser;

  if (user) {
    if (user.isAnonymous) {
      callback("Not Yet Signed In");
    } else {
      signOut(auth)
        .then(() => {
          callback("Sign Out Success");
        })
        .catch(() => {
          callback("Sign Out Error");
        });
    }
  } else {
    callback("Not Yet Signed In");
  }
}

export { subscribeUser, authSignUpEmail, authSignInEmail, authSignOut };
