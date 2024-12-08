/**
 * create the import here 
 */
import React, { useState, useContext, createContext, ReactNode } from 'react'
import Cookies from 'js-cookie'
/**
 * define the app interface here 
 */
interface appInterface {
    token: string | null;
    isLoggedIn: boolean;
    setToken: (token: string | null) => void;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}
/**
 * create the app context here 
 */

const AppContext = createContext<appInterface | null>(null)
/**
 * Have a provider exported as a component 
 */

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }:{ children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(null)
    //get the status from the cookies 
    const loginStatus: string | undefined = Cookies.get('isLoggedIn')
    //get the token from the user
    //send it to the backend to verify 
    //if the token is valid, return true, else return false and delete the token from the user cookie
    //also use the state management tools like redux
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(Boolean(loginStatus))
    return (
        <AppContext.Provider value={{ token, setToken, isLoggedIn, setIsLoggedIn }}>
            {children}
        </AppContext.Provider>
    )
}

/**
 * have a component to read in the context values
 */

export const useAppContext = () => {
    const appContext = useContext(AppContext)
    if (!appContext) {
        throw new Error('there is no context that exists')
    }
    return appContext
}


export default AppProvider