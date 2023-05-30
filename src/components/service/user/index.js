import React, {useEffect, useState} from 'react';
import { initializeApp } from "firebase/app";
import { auth } from '../../../firebase';
import {
    GoogleAuthProvider, 
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";

const AuthContext = React.createContext()

export function useAuth() {
    return React.useContext(AuthContext)
  }

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)


    const loginUser = (email, password) => {
        try {
           return signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error)
        }
    }

    const ragister = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const logout = () =>{
      return auth.signOut()
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setCurrentUser(user)
          setLoading(false)
        })
    
        return unsubscribe
      }, [])

      const value = {
        currentUser,
        loginUser,
        logout,
        ragister
      }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
