import { useState, useEffect } from "react";
import Firebase, { googleAuthProvider } from "../../firebaseconfig";

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName,
  emailVerified: user.emailVerified,
  isAnonymous: user.isAnonymous,
  metadata: user.metadata,
  phoneNumber: user.phoneNumber,
  photoURL: user.photoURL,
  providerData: user.providerData,
  providerId: user.providerId,
  refreshToken: user.refreshToken,
  tenantId: user.tenantId,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);

  const authStateChanged = async (authState) => {
    if (!authState) {
      setAuthUser(null);
      setLoading(false);
      return;
    }
    setLoading(true);

    const formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setLoading(false);
  };

  const clear = () => {
    setAuthUser(null);
    setLoading(false);
  };

  const signInWithEmailAndPassword = (email: string, password: string): any => {
    return Firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const signInWithGoogle = async () =>
    Firebase.auth().signInWithPopup(googleAuthProvider);

  const createUserWithEmailAndPassword = (email: string, password: string) =>
    Firebase.auth().createUserWithEmailAndPassword(email, password);

  const signOut = () => Firebase.auth().signOut().then(clear);

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = Firebase.auth().onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    signInWithGoogle,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    authUser,
    loading,
  };
}
