import Card from "../Component/Card";
import Carousel from "../Component/Carousel";
import Navigation from "../Component/Navigation";
import Search from "../Component/Search";

const Home = () => {
  return (
    <>
      <Navigation />
      <Carousel />
      <Search />
      <Card />
    </>
  );
};

export default Home;
