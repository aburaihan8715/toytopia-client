import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header></Header>
      <div className="mt-20">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
