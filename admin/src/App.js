import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import PrivateRoute from "./pages/privateRoute";
import Dashboard from "./pages/dashboard";
import LoggedIn from "./pages/privateRoute/loggedIn";
import Login from "./pages/user/login";
import Register from "./pages/user/register";

function App() {
  const dataa = useSelector((state) => state);
  console.log(dataa);
  return (
    <Routes>
      <Route
        path="/"
        Component={() => <PrivateRoute Component={Dashboard} />}
      />
      <Route path="/login" Component={() => <LoggedIn Component={Login} />} />
      <Route
        path="/register"
        Component={() => <LoggedIn Component={Register} />}
      />
    </Routes>
  );
}

export default App;
