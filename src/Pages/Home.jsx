import Card from "../Component/Card";
import Carousel from "../Component/Carousel";
import Navigation from "../Component/Navigation";
import Search from "../Component/Search";
import Footer from "../Component/Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <Carousel />
      {/* <Search /> */}
      <Card />
      <Footer />
    </>
  );
};

export default Home;
