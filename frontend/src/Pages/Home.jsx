import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Home = () => {
  const { user, logout } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout(); 
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#0F3238] flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user?.username || "User"}!</h1>
      
      {user && (
        <button
          onClick={handleLogout}
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-red-600 hover:text-white transition duration-300"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Home;
