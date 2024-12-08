import React from 'react'
import Login from './Components/Login'
import Button from './Components/Button'
import Dashboard from './Components/Dashboard'
import { useAppContext } from './Utils/AppContext'
import Cookies from 'js-cookie'

const App: React.FC = () => {
  const { isLoggedIn, setIsLoggedIn } = useAppContext()
  const handleSubmit = () => {
    setIsLoggedIn(!isLoggedIn)
    if (isLoggedIn) {
      Cookies.remove('isLoggedIn')
    } else {
      Cookies.set('isLoggedIn', String(!isLoggedIn))
    }
  }
  return (
    <div>
      <Login />
      <Button title={isLoggedIn ? "Logout" : "Login"} handleSubmit={handleSubmit} />
      <Dashboard />
    </div>
  )
}

export default App
