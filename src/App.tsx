import { NavProvider } from "./components/menu /navcontext";
import { Home } from "./components/pages/home";
import "./index.css";
export const App = () => {
  return (
    <main className="w-full">
      <NavProvider>{<Home />}</NavProvider>
    </main>
  );
};
