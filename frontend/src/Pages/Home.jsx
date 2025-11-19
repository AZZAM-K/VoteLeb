import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";

const Home = () => {
  return (
    <div className="min-h-screen flex text-white bg-white">
      <SideBar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-6">Welcome to LebSpace!</h1>
          <p className="text-gray-300 mb-6">
            This is your main content area. Add your dashboard, posts, or any components here.
          </p>

          <div className="p-6 bg-[#1A4248] rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Your Dashboard</h2>
            <p className="text-gray-300">
              Add your widgets, stats, or other components here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
