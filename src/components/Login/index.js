import React from "react";
import cn from "classnames";
import styles from "./Login.module.sass";

import TextInput from "../TextInput";

import { useAuthContext } from "../../contexts/AuthContext";
import { authSignInEmail } from "../../utils/Authentication";

const Login = () => {
  const { setUserAuth } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    console.log("Signing in...")
    authSignInEmail(email, password, (result, user, error) => {
      if (result === "Sign In Success") {
        setUserAuth(user);
        console.log("Success!")
      } else {
        console.log(result, error);
      }
    });
  };

  return (
    <div className={cn(styles.login)}>
      <div className={styles.item}>
        <div className={cn("h4", styles.title)}>Sign In to ADM Days</div>

        <form className={styles.form} action="" onSubmit={handleSubmit}>
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

          <button className={cn("button", styles.button)}>Sign In</button>
        </form>

        <div className={styles.foot}>
          Don't have an account?{" "}
          <a className={styles.link} href="/signup" rel="noopener noreferrer">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
