import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import Blogs from "../pages/Blogs/Blogs";
import MyToys from "../pages/MyToys/MyToys";
import AddToy from "../pages/AddToy/AddToy";
import AllToy from "../pages/AllToy/AllToy";
import ShopByCategory from "../pages/Home/ShopByCategory/ShopByCategory";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute";

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
        path: "/shopByCategory",
        element: <ShopByCategory></ShopByCategory>,
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`),
      },
    ],
  },
]);

export default router;
