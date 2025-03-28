import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user"); 
    navigate("/login");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center text-gray-900">
        <h1 className="text-4xl font-bold mb-4">🎉 You are logged in! 🎉</h1>
        <p className="text-lg">Welcome to the Home Page</p>
        <button
          onClick={handleLogout}
          className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
