import { useState } from 'react'
import { AppContext } from './context'

const AppContextProvider = props => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const [token, setToken] = useState(localStorage.getItem('token') || '')

  const [user, setUser] = useState(null)

  const signup = async formData => {
    try {
      const res = await fetch(`${backendUrl}/api/users/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      if (!res.ok) {
        console.log('Signup error:', data.message)
        return { success: false, message: data.message }
      }

      localStorage.setItem('token', data.token)
      setToken(data.token)
      setUser({
        id: data.id,
        name: data.name,
        email: data.email,
      })

      return { success: true }
    } catch (err) {
      return { success: false, message: err.message }
    }
  }

  const login = async formData => {
    try {
      const res = await fetch(`${backendUrl}/api/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        console.log('Login error data:', data)
        return { success: false, message: data.message || 'Login failed' }
      }

      localStorage.setItem('token', data.token)
      setToken(data.token)
      setUser({
        id: data.id,
        name: data.name,
        email: data.email,
      })

      return { success: true }
    } catch (err) {
      return { success: false, message: err.message }
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken('')
    setUser(null)
  }

  const value = {
    backendUrl,
    token,
    setToken,
    user,
    setUser,
    login,
    signup,
    logout,
  }

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  )
}

export default AppContextProvider
