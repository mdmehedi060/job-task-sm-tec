import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Home/Home";
import Buyer from "../Buy/Buyer";
import BuyerSearch from "../BuyerSearch/BuyerSearch";
import About from "../About/About";

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
        path: "/search",
        element: <BuyerSearch></BuyerSearch>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);
