import { useContext, createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword
} from "firebase/auth";

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = () =>{
        signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log(currentUser)
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        }
    },[])
    return (
        <AuthContext.Provider value={{ createUser, user, logout, login }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}