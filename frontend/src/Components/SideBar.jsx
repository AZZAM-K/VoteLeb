import { useContext } from 'react'
import {
  Home,
  Bell,
  Search,
  Mail,
  Plus,
  LogOut,
  Settings,
  User,
} from "lucide-react"
import { AppContext } from "../Context/AppContext"
import { Link, useNavigate } from "react-router-dom"

const SideBar = () => {
  const { logout } = useContext(AppContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  const MenuItem = ({ Icon, label, to }) => (
    <button
      onClick={() => navigate(to)}
      className='flex items-center gap-4 px-4 py-2.5 rounded-xl text-lg font-medium transition duration-200 w-full text-left text-gray-300 hover:bg-[#F65C21] hover:text-white'
    >
      <Icon size={20} className='min-w-fit' />
      <span>{label}</span>
    </button>
  )

  return (
    <>
      <div className='hidden md:flex w-64 min-h-screen bg-black text-white flex-col justify-between p-5 shadow-2xl border-r border-[#1A4248]'>
        <div className='flex flex-col'>
          <Link
            to={"/"}
            className='flex items-center justify-start mb-10 pl-2 cursor-pointer'
          >
            <div>
              <img
                src='../../public/Logo.jpg'
                alt='Logo'
                className='mr-10 w-20 '
              />
            </div>
            <div className='text-2xl font-semibold mr-7'>LebSpace</div>
          </Link>

          <div className='flex flex-col space-y-2'>
            <MenuItem Icon={Home} label='Home' to='/' />
            <MenuItem Icon={Bell} label='Notifications' to='/notifications' />
            <MenuItem Icon={Mail} label='Messages' to='/messages' />
            <MenuItem Icon={Settings} label='Settings' to='/settings' />
          </div>

          <button
            onClick={() => navigate("/create")}
            className='flex items-center text-gray-300 hover:bg-orange-600 hover:text-white gap-4 px-4 py-3 mt-6 rounded-xl font-bold transition duration-200 w-full justify-start'
          >
            <Plus size={20} className='stroke-2' />
            <span>Post New</span>
          </Link>
        </div>

        <hr className='border-t border-[#1A4248] my-4' />

        <div>
          <button
            onClick={handleLogout}
            className='flex items-center gap-4 text-white font-semibold hover:text-red-700 transition duration-200 w-full justify-start ml-4'
          >
            <LogOut size={20} />
            <span>Log Out</span>
          </button>
        </div>
      </div>

      <div
        className='fixed h-18 bottom-3 left-1/2 -translate-x-1/2 
  w-[95%] bg-black/60 backdrop-blur-xl 
  rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.4)]
  py-4 px-3 flex justify-around items-center
  md:hidden transition-all duration-300'
      >
        <button
          onClick={() => navigate("/")}
          className={`flex flex-col items-center transition transform active:scale-90 
      ${location.pathname === "/" ? "text-orange-500" : "text-gray-400"}`}
        >
          <Home size={32} />
        </button>

        <button
          onClick={() => navigate("/search")}
          className={`flex flex-col items-center transition transform active:scale-90
      ${location.pathname === "/search" ? "text-orange-500" : "text-gray-400"}`}
        >
          <Search size={32} />
        </button>

        <button
          onClick={() => navigate("/messages")}
          className={`flex flex-col items-center transition transform active:scale-90
      ${
        location.pathname === "/messages" ? "text-orange-500" : "text-gray-400"
      }`}
        >
          <Mail size={32} />
        </button>

        <button
          onClick={() => navigate("/profile")}
          className={`flex flex-col items-center transition transform active:scale-90
      ${
        location.pathname === "/profile" ? "text-orange-500" : "text-gray-400"
      }`}
        >
          <User size={32} />
        </button>
      </div>
    </>
  )
}

export default SideBar
