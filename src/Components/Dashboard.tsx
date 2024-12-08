import React from 'react'
import { useAppContext } from '../Utils/AppContext'
import Account from './Account'
const Dashboard: React.FC = () => {
    const { isLoggedIn } = useAppContext()
    return (
        <div>
            {isLoggedIn ? (
                <Account />
            ) : (
                <span>
                    The user is not logged In
                </span>
            )}
        </div>
    )
}

export default Dashboard
