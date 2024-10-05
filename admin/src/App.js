import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import PrivateRoute from "./pages/privateRoute";
import Dashboard from "./pages/dashboard";
import LoggedIn from "./pages/privateRoute/loggedIn";
import Login from "./pages/user/login";
import Register from "./pages/user/register";
import Societies from "./pages/societies";
import Events from "./pages/events";
import Forms from "./pages/forms";

function App() {
  const dataa = useSelector((state) => state);
  console.log(dataa);
  return (
    <Routes>
      <Route
        path="/"
        Component={() => <PrivateRoute Component={Dashboard} />}
      />
      <Route
        path="/society"
        exact
        Component={() => <PrivateRoute Component={Societies} />}
      />
      <Route
        path="/events"
        exact
        Component={() => <PrivateRoute Component={Events} />}
      />
      <Route
        path="/forms"
        exact
        Component={() => <PrivateRoute Component={Forms} />}
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
