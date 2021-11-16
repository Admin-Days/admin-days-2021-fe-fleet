import firebaseConfig from "./firebaseConfig";
import { getApps, initializeApp } from "firebase/app";
import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
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

  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          callback("Sign In Success", userCredential.user, null);
        })
        .catch((e) => {
          callback("Sign In Error", null, e);
        });
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

function updateUserData(displayName, phoneNumber) {
  let user = auth.currentUser;

  if (user && !user.isAnonymous) {
    updateProfile(user, { displayName: displayName, phoneNumber: phoneNumber });
  }
}

export {
  subscribeUser,
  authSignUpEmail,
  authSignInEmail,
  authSignOut,
  updateUserData,
};
