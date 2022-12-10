import {createContext, useContext, useState} from "react";
import * as React from "react";

const AuthContext = createContext({user : null})

export const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState(null)

    return (
        // @ts-ignore
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)