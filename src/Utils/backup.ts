import React, { ReactNode, createContext, useContext, useState } from "react";

interface userProps {
    user: string | null;
    isLoggedIn: boolean;
    setUser: (user: string | null) => void;
    setLoggedIn: (isLoggedIn: boolean) => void;
}

//create the context 

const AppContext = createContext<userProps | null>(null);


//create a provider component 

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<string | null>(null) 
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false)
    return (
        <AppContext.Provider value={{ user, setUser, isLoggedIn, setLoggedIn }}>
            {children}
        </AppContext.Provider>
    )
}

//access the context 
export const useAppContext = (): userProps => {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context
}

export default AppProvider