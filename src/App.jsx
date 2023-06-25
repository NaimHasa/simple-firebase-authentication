import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './firebase/firebase.init';
const auth = getAuth(app);
const App = () => {
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    // console.log('Google sign in is comming..')
    signInWithPopup(auth, provider)
      .then((result) => {

        const user = result.user;
        console.log(user);


      }).catch((error) => {
        console.log('error', error);


      });


  }

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
};

export default App;