import { Routes, Route } from 'react-router'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Home from './Pages/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<h1>About Page</h1>} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  )
}

export default App
