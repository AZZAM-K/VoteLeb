import Navbar from "../Components/Navbar"
import SideBar from "../Components/SideBar"
import SideBar2 from "../Components/SideBar2"

const Home = () => {
  return (
    <div className='flex text-white bg-black/80 min-h-screen'>
      <SideBar />

      <div className='flex flex-1 flex-col'>
        <Navbar />
        <div className='flex flex-1 p-8 gap-6'>
          <div className='hidden lg:block w-[400px]'>
            <SideBar2 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
