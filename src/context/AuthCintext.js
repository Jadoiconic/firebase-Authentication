import { useContext, createContext } from "react";
import { auth } from "../firebase";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword
} from "firebase/auth";

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    return (
        <AuthContext.Provider value={{ createUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}