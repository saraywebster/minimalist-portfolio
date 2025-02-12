import { BrowserRouter } from "react-router";
import "../App.css";
import { HomeRoutes } from "./routes/home-routes";

function App() {
  return (
    <div className=" bg-gradient-to-br from-[#0f0f17] to-[#1a1a2e] h-screen flex flex-col items-center text-white ">
      <BrowserRouter>
        <HomeRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
