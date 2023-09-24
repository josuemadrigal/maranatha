import Hero from "../components/Hero";
import Ministerio from "../components/Ministerio";

import { WelcomeHome } from "../components/WelcomeHome";

const Home = () => {
  return (
    <>
      <Hero />
      <WelcomeHome />
      {/* <FeaturesHome /> */}
      <Ministerio />
      {/* <CardsCarousel /> */}
    </>
  );
};

export default Home;
