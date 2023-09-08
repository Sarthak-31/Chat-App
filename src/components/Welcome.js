import React from "react";
import GoogleSignin from "../img/google_sign_in.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Welcome to the MNNIT Chat App</h2>
      <img src="/favicon.ico" alt="Mnnit logo" width={100} height={85} />
      <p>Sign in with Google to chat with with other Mnnitians</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;
