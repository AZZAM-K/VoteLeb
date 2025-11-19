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
} from 'lucide-react'
import { AppContext } from '../Context/context'
import { useNavigate, Link } from 'react-router-dom'

const MenuItem = ({ Icon, label, to }) => {
  const navigate = useNavigate()

  return (
    <Link
      to={to}
      className='flex items-center gap-4 px-4 py-2.5 rounded-xl text-lg font-medium transition duration-200 w-full text-left
       text-gray-300 hover:bg-[#1A4248] hover:text-white'
    >
      <Icon size={20} className='min-w-fit' />
      <span>{label}</span>
    </Link>
  )
}

const SideBar = () => {
  const { logout } = useContext(AppContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <>
      <div className='hidden md:flex w-64 min-h-screen bg-[#0F3238] text-white flex-col justify-between p-5 shadow-2xl border-r border-[#1A4248]'>
        <div className='flex flex-col'>
          <Link to='/' className='flex items-center justify-start mb-10 pl-2'>
            <img
              src='../../public/Logo.jpg'
              alt='Logo'
              className='mr-10 w-45 cursor-pointer'
            />
          </Link>

          <div className='flex flex-col space-y-2'>
            <MenuItem Icon={Home} label='Home' to='/' />
            <MenuItem Icon={Bell} label='Notifications' to='/notifications' />
            <MenuItem Icon={Mail} label='Messages' to='/messages' />
            <MenuItem Icon={Settings} label='Settings' to='/settings' />
          </div>

          <Link
            to='/create'
            className='flex items-center text-gray-300 hover:bg-[#1A4248] hover:text-white gap-4 px-4 py-3 mt-6 rounded-xl
             font-bold transition duration-200 w-full justify-start'
          >
            <Plus size={20} className='stroke-2' />
            <span>Post New</span>
          </Link>
        </div>

        <hr className='border-t border-[#1A4248] my-4' />

        <div>
          <button
            onClick={handleLogout}
            className='flex items-center gap-4 text-white font-semibold hover:text-red-700 transition duration-200 w-full
             justify-start ml-4'
          >
            <LogOut size={20} />
            <span>Log Out</span>
          </button>
        </div>
      </div>

      <div
        className='fixed bottom-0 left-0 w-full bg-[#0F3238] text-white flex justify-around items-center py-6 md:hidden border-t
       border-[#1A4248]'
      >
        <button
          onClick={() => navigate('/')}
          className='flex flex-col items-center text-gray-300'
        >
          <Home size={20} />
        </button>
        <button
          onClick={() => navigate('/search')}
          className='flex flex-col items-center text-gray-300'
        >
          <Search size={20} />
        </button>
        <button
          onClick={() => navigate('/messages')}
          className='flex flex-col items-center text-gray-300'
        >
          <Mail size={20} />
        </button>
        <button
          onClick={() => navigate('/profile')}
          className='flex flex-col items-center text-gray-300'
        >
          <User size={20} />
        </button>
      </div>
    </>
  )
}

export default SideBar
