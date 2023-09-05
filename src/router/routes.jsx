import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgetPassword from "../pages/ForgetPassword";
import Blogs from "../pages/Blogs";
import AllToy from "../pages/AllToy";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/MyToys";
import AddToy from "../pages/AddToy";
import UpdateToy from "../pages/UpdateToy";
import ShopByCategory from "../features/toys/ShopByCategory";
import ToyDetails from "../pages/ToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/allToy",
        element: <AllToy></AllToy>,
        loader: () => fetch("http://localhost:5000/toys"),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/addToy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateToy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`),
      },
      {
        path: "/shopByCategory",
        element: <ShopByCategory></ShopByCategory>,
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`),
      },
    ],
  },
]);

export default router;
