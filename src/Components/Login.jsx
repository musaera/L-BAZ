import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Fetch users from MockAPI
      const response = await axios.get(
        "https://673ea0dfa9bc276ec4b50ff1.mockapi.io/users"
      );
      const users = response.data;

      // Check if user exists and password matches
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        // Call the onLogin function passed as a prop
        onLogin();
        navigate("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded shadow-md">
        <div className="flex justify-center mb-4">
          <img
            className="h-16 w-16"
            src="http://localhost:5173/src/assets/logo.png"
            alt="logo"
          />
        </div>
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">
          Welcome Back!
        </h2>
        <p className="text-center text-sm mb-6 text-gray-500">
          Silakan login untuk melanjutkan ke Dashboard
        </p>

        {error && (
          <div className="mb-4 p-2 text-sm text-red-600 bg-red-100 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
