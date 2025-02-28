import { Sidebar } from "./components/menu";
import "./index.css";

export const App = () => {
  return (
    <>
      <Sidebar />
      <h1 className="text-3xl font-bold underline bg-blue-600">Hello world!</h1>
    </>
  );
};
