import { Route, Routes } from "react-router-dom";
import Home from "src/Pages/Home";
import NotFound from "src/Pages/NotFound";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default MainRoutes;
