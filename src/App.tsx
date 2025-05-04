import "./output.css";
import './styles/global.css';


import { RouterProvider } from "react-router-dom";
import rotas from "./rotas";

export default function App() {
  return <RouterProvider router={rotas} />;
}

export { App };