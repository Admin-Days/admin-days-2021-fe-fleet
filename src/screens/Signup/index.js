import React, { useState } from "react";
import { useHistory } from "react-router";
import cn from "classnames";
import styles from "./Signup.module.sass";

import Loader from "../../components/Loader";
import Modal from "../../components/Modal";
import TextInput from "../../components/TextInput";

import { useAuthContext } from "../../contexts/AuthContext";
import { authSignUpEmail } from "../../utils/Authentication";

import firebaseConfig from "../../utils/firebaseConfig";
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";

initializeApp(firebaseConfig);
const storage = getStorage();
const db = getFirestore();

const Signup = () => {
  const { setUserAuth } = useAuthContext();
  const history = useHistory();

  const [signUpLoading, setSignUpLoading] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;

    const email = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[4].value;

    const ikm = e.target[5].files[0];
    const ipk = e.target[6].files[0];
    const cv = e.target[7].files[0];

    if (password !== confirmPassword) {
      alert("Password do not match!");
      return;
    }

    setSignUpLoading(true);

    await authSignUpEmail(email, password, async (result, user) => {
      if (result === "Sign Up Success") {
        setUserAuth(user);

        let ikmLink, ipkLink, cvLink;

        await uploadBytes(ref(storage, `ikm/${email}-${Date.now()}`), ikm).then(
          (snapshot) => {
            getDownloadURL(snapshot.ref).then((link) => (ikmLink = link));
          }
        );
        await uploadBytes(ref(storage, `ipk/${email}-${Date.now()}`), ipk).then(
          (snapshot) => {
            getDownloadURL(snapshot.ref).then((link) => (ipkLink = link));
          }
        );
        await uploadBytes(ref(storage, `cv/${email}-${Date.now()}`), cv).then(
          async (snapshot) => {
            await getDownloadURL(snapshot.ref).then((link) => (cvLink = link));
          }
        );

        try {
          await addDoc(collection(db, "users"), {
            userId: user.uid,
            email: email,
            name: name,
            ikm: ikmLink,
            ipk: ipkLink,
            cv: cvLink,
          });
          setSignUpSuccess(true);
          setSignUpLoading(false);
        } catch (e) {
          setSignUpLoading(false);
          alert("Sign up failed!e");
        }
      } else {
        setSignUpLoading(false);
        alert("Sign up failed!");
      }
    });
  };

  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <h1>Let's get you started!</h1>
          <p>Sign up to get the most out of Admin Days</p>

          <form className={styles.form} action="" onSubmit={handleSubmit}>
            <TextInput
              className={styles.field}
              name="name"
              type="text"
              placeholder="Full Name"
              required
            />

            <TextInput
              className={styles.field}
              name="email"
              type="email"
              placeholder="Email"
              required
            />

            <TextInput
              className={cn(styles.field, styles.password)}
              name="password"
              type="password"
              placeholder="Password"
              required
              view
            />

            <TextInput
              className={cn(styles.field, styles.password)}
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
            />

            <div class={styles.fileContainer}>
              <h3 className={styles.files}>Bukti IKM FIA</h3>
              <input
                type="file"
                name="ikm"
                accept=".png, .jpg, .jpeg"
                required
              />
            </div>

            <div class={styles.fileContainer}>
              <h3 className={styles.files}>Bukti IPK</h3>
              <input
                type="file"
                name="ipk"
                accept=".png, .jpg, .jpeg"
                required
              />
            </div>

            <div class={styles.fileContainer}>
              <h3 className={styles.files}>CV</h3>
              <input
                type="file"
                name="cv"
                accept=".png, .jpg, .jpeg"
                required
              />
            </div>

            <button className={cn("button", styles.button)}>Sign Up</button>
          </form>
        </div>

        <Modal visible={signUpLoading}>
          <div className={styles.loadingContainer}>
            <Loader className={styles.loader} />
            <h1 className={styles.loadingText}>Loading...</h1>
          </div>
        </Modal>

        <Modal visible={signUpSuccess} onClose={() => history.push("/")}>
          <h1>Successfully Sign Up!</h1>
        </Modal>
      </div>
    </>
  );
};

export default Signup;
