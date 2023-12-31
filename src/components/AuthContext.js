import { useState,useContext, createContext} from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const login = (user) => {
        setUser(user)
    }

    const logout = () =>{
        setUser(null)
    }
    
    const contextValue = {
        user,
        login,
        logout
    }

    return(
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    return useContext(AuthContext)
}
