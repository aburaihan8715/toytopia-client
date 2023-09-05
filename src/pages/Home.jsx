// import Banner from "../components/Slider";
// import Gallery from "../components/Gallery";
// import ShopByCategory from "../components/ShopByCategory";
// import ContactUs from "../features/contact/ContactUs";
// import Testimonials from "../components/Testimonials";
import ContactUs from "../features/contact/ContactUs";
import Testimonials from "../features/testimonials/Testimonials";
import ShopByCategory from "../features/toys/ShopByCategory";
import useTitle from "../hooks/useTitle";
import Gallery from "../ui/Gallery";
import Slider from "../ui/Slider";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Slider />
      <ShopByCategory />
      <Gallery />
      <ContactUs />
      <Testimonials />
    </div>
  );
};

export default Home;
