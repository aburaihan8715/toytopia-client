import Banner from "./Slider/Slider";
import Gallery from "./Gallery/Gallery";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import ContactUs from "./ContactUs/ContactUs";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => (
  <div>
    <Banner></Banner>
    <ShopByCategory></ShopByCategory>
    <Gallery></Gallery>
    <ContactUs></ContactUs>
    <Testimonials></Testimonials>
  </div>
);

export default Home;
