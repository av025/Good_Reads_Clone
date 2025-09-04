import { Route, Routes } from "react-router-dom";
import Signin from "src/Pages/Auth/Signin";
import Signup from "src/Pages/Auth/Signup";
import Dashboard from "src/Pages/Dashboard";
import Home from "src/Pages/Home";
import NotFound from "src/Pages/NotFound";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default MainRoutes;
