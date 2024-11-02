import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import OrderNow from "./components/OrderNow";
// import LoginForm from "./components/FormLogin";
// import ManualOrderForm from "./components/FormApi";

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // useEffect(() => {
  //   const token = localStorage.getItem("authToken");
  //   setIsAuthenticated(!!token); // Sets true if token exists
  // }, []);

  // const handleLoginSuccess = () => {
  //   setIsAuthenticated(true); // Update authentication state after login
  // };

  // const handleLogout = () => {
  //   localStorage.removeItem("authToken");
  //   setIsAuthenticated(false);
  // };

  return (
    <div>
      {/* {isAuthenticated ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <ManualOrderForm />
        </div>
      ) : (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      )} */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute Component={Home} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ordering" element={<OrderNow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
