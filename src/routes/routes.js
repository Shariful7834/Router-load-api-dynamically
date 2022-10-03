import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Countries from "../components/Countries/Countries";
import Country from "../components/Country/Country";
import CountryDetails from "../components/CountryDetails/CountryDetails";
import Contact from "../components/Header/Contact/Contact";
import Home from "../components/Home/Home";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      // { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      {
        path: "/",
        loader: () => {
          return fetch("https://restcountries.com/v3.1/all");
        },
        element: <Countries></Countries>,
      },
      {
        path: "/countries",
        loader: () => {
          return fetch("https://restcountries.com/v3.1/all");
        },
        element: <Countries></Countries>,
      },
      {
        path: "/country/:name",
        loader: async ({ params }) => {
          return fetch(`https://restcountries.com/v3.1/name/${params.name}`);
        },
        element: <CountryDetails></CountryDetails>,
      },

      { path: "/about", element: <About></About> },
      { path: "/contact", element: <Contact></Contact> },
    ],
  },
  { path: "*", element: <div>Page not Found</div> },
]);
