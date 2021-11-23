import { createContext, useContext } from "react";
import useFirebaseAuth from "../hooks/useFirebaseAuth";
import { UserCredential } from "firebase/auth";

const FireBaseContext = createContext({
  authUser: null,
  loading: true,
  signInWithGoogle: async () => {},
  signInWithEmailAndPassword: async () => {},
  createUserWithEmailAndPassword: async () => {},
  signOut: async () => {},
});

export function FireBaseAuthProvider({ children }) {
  const auth = useFirebaseAuth();
  return (
    <FireBaseContext.Provider value={auth}>{children}</FireBaseContext.Provider>
  );
}

export const useFireBaseAuth = () => useContext(FireBaseContext);
