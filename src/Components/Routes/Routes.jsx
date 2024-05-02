import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Home/Home";
import Buyer from "../Buy/Buyer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/buyer",
        element: <Buyer></Buyer>,
      },

      {
        path: "/signup",
        element: <></>,
      },
    ],
  },
]);
