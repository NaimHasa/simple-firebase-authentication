import React, { useState } from 'react';
import app from './firebase/firebase.init';
import './App.css';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

const auth = getAuth(app);

const App = () => {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider();
  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);



        console.log(user)
      }).catch(error => {
        console.log('error:', error);
      })

  }

  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch((error) => {
        setUser({})
      })
      .catch(error => {
        console.log('error:', error);
      })
  }

  const handleGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
      })
  }


  return (
    <div className='App'>
      <div>
        {

          user.uid
            ?
            <button onClick={handleSingOut}>Sign Out</button>
            :
            <button onClick={handleGoogleSingIn}>AddToGoogleSignIn</button>

        }
        <>
          <div>
            <button onClick={handleGithub}>Sign In Github</button>
          </div>
        </>
        {user.uid
          &&
          <div>
            <h3>Name: {user.displayName}</h3>
            <p>Email: {user.email}</p>
            <img src={user.photoURL} alt="" />
          </div>
        }
      </div>
    </div>
  );
};

export default App;