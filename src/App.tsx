import { BrowserRouter } from "react-router";
import "../App.css";
import { HomeRoutes } from "./routes/home-routes";

function App() {
  return (
    <div className="App bg-gradient-to-br from-purple-950 via-black to-black h-screen items-center flex justify-center ">
      <BrowserRouter>
        <HomeRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
