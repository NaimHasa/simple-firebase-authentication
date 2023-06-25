import React, { useState } from 'react';
import app from './firebase/firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);

const App = () => {
  const [user, setUser] = useState({})
  const provider = new GoogleAuthProvider();
  const handleGoogleSingIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user);



        console.log(user)
      }).catch(error => {
        console.log('error:', error);
      })
  }
  return (
    <div>
      <div>
        <button onClick={handleGoogleSingIn}>AddToGoogleSignIn</button>
        <div>
          <h3>Name: {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      </div>
    </div>
  );
};

export default App;