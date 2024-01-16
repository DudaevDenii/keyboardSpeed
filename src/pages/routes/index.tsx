import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Keyboard from "../Keyboard";
import NotFound404 from "../NotFound404";
import App from "../../App";
import Congrats from "../Congrats";
import Profile from "../Profile";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/keyboard", element: <Keyboard /> },
      { path: "/congrats", element: <Congrats /> },
      { path: "/profile", element: <Profile /> },
      { path: "*", element: <NotFound404 /> },
    ],
  },
]);
