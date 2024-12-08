import React from 'react'
import { useAppContext } from '../Utils/AppContext'

const Login: React.FC = () => {
    const { isLoggedIn } = useAppContext()
    return (
        <div>
            {isLoggedIn ? "You can see this because you are authenticated" : "Else, you cant see any secrets here"}
        </div>
    )
}

export default Login
