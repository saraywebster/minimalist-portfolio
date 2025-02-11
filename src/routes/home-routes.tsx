import { Route, Routes } from "react-router";
import { About } from "../components/about";
import { Home } from "../pages/Home";

export const HomeRoutes = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};
