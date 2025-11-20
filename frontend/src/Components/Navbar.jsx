import { useContext } from 'react'
import { AppContext } from '../Context/context'
import { Search, Plus, Bell } from 'lucide-react'

const Navbar = () => {
  const { user } = useContext(AppContext)

  return (
    <nav className='w-full bg-black/90  border-b border-gray-100 shadow-md sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between'>
        <div className='flex items-center justify-between'>
          <div>
            <button className='sm:hidden  text-white p-2 rounded-full flex items-center justify-center'>
              <Plus className='h-10 w-10' />
            </button>
          </div>
          <div>
            <span className='block md:hidden ml-12 text-3xl font-extrabold cursor-pointer tracking-wider text-white'>
              LebSpace
            </span>
          </div>
        </div>
        <div className='flex-1 max-w-lg mx-8 hidden sm:block'>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400'>
              <Search className='h-4 w-4' />
            </div>
            <input
              type='text'
              placeholder='Search for friends, groups, pages...'
              className='w-full pl-10 pr-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-full border-transparent focus:border-0 focus:ring-2 focus:ring-offset-2 focus:ring-[#F65C21] transition duration-150 ease-in-out placeholder-gray-500'
            />
          </div>
        </div>
        <div className='w-px hidden md:block h-full bg-gray-400'></div>
        <div className='flex items-center md:w-[20%] space-x-5'>
          <button className=' p-2 block md:hidden rounded-full sm:p-2 items-center justify-center'>
            <Bell className='h-7 w-7 text-white' />
          </button>

          <div className='hidden md:flex ml-2 items-center  gap-2 cursor-pointer group'>
            <img
              src={user?.profilePicture?.url || '/default-profile.jpg'}
              alt={user?.username || 'User'}
              className='w-9 h-9 rounded-full object-cover border-2 border-transparent transition duration-150'
            />
            <span className='font-medium text-sm text-gray-700'>
              {user?.username || 'Profile'}
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
