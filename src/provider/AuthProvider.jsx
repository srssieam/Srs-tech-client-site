import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../../firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userInfo = (userName, userPhoto)=>{
       return updateProfile(auth.currentUser, {
            displayName: userName,
            photoURL: userPhoto,
          })
    }

    // sign in with email and password
    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign in with google
    const googleProvider = new GoogleAuthProvider();
    const googleSign = ()=>{
       return signInWithPopup(auth, googleProvider)
    }


     // observe onAuthStateChanged
     useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            console.log('observing current user', currentUser)
        });
        return()=>{
            unSubscribe();
        }
    },[])

    const authInfo = { createUser, userInfo, signInUser, googleSign, user }

    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;