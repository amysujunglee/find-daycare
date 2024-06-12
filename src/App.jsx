import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FindDaycare from "./components/pages/FindDaycare";
import MyFavourites from "./components/pages/MyFavourites";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Login from "./components/pages/Login";
import HomeLayout from "./components/layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <FindDaycare />,
      },
      {
        path: "my-favourites",
        element: <MyFavourites />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
