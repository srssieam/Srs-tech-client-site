import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from "../../firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userInfo = (userName, userPhoto)=>{
       return updateProfile(auth.currentUser, {
            displayName: userName,
            photoURL: userPhoto,
          })
    }


    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo = { createUser, userInfo, signInUser }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;