import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import ShowDetails from "../pages/ShowDetails/ShowDetails";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/shows/:name",
        element: <ShowDetails />,
        loader: ({ params }) =>
          fetch(`https://api.tvmaze.com/singlesearch/shows?q=${params.name}`),
      },
    ],
  },
]);
export default router;
