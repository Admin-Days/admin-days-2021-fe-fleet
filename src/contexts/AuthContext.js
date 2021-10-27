import { createContext, useEffect, useContext, useState } from "react";
import { subscribeUser } from "../utils/Authentication";

const AuthContext = createContext({
  userAuth: null,
  userAuthLoading: true,
  setUserAuth: (user) => null,
});

export function AuthWrapper({ children }) {
  const [userAuth, setUserAuth] = useState(null);
  const [userAuthLoading, setUserAuthLoading] = useState(true);

  useEffect(() => {
    subscribeUser((newUser) => {
      setUserAuth(newUser);
      setUserAuthLoading(false);
    });
  }, []);

  const state = {
    userAuth: userAuth,
    userAuthLoading: userAuthLoading,
    setUserAuth: setUserAuth,
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
