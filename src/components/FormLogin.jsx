import React from "react";
import axios from "axios";

const LoginForm = ({ onLoginSuccess }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/signin/", {
        username,
        password,
      });
      const token = response.data.token;
      if (token) {
        localStorage.setItem("authToken", token);
        alert("Login successful!");
        onLoginSuccess();
      } else {
        alert("Token not received");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex justify-center bg-gradient-to-r from-orange-300 from-10% via-sky-100 via-30% to-yellow-200 to-90%">
      <div className="relative md:bg-white bg-orange-400 md:w-[50%] w-[100%] h-screen flex justify-center">
        <form
          className="w-[100%] flex flex-col justify-center bg-white space-y-4 rounded-lg m-10 items-center"
          onSubmit={handleLogin}
        >
          <div className="text-4xl font-bold text-primary">Majeka Point</div>
          <br />
          <div className="w-[80%] flex flex-col">
            <label htmlFor="username">User Name</label>
            <input
              className="border-2 rounded-lg px-2 py-2"
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="w-[80%] flex flex-col">
            <label htmlFor="password" className="flex justify-between">
              Password
              <span className="text-sky-500 cursor-pointer">
                Forgot Password?
              </span>
            </label>
            <input
              className="border-2 rounded-lg px-2 py-2"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="font-bold px-2 py-2 bg-gray-400 text-white rounded-lg border-0 w-[80%] cursor-pointer"
            type="submit"
          >
            Sign in
          </button>
          <div className="flex flex-col sm:flex-row">
            Don't have an account?
            <span className="text-sky-500 ml-1 cursor-pointer">
              Create new account
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
