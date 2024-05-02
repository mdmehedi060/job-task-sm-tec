import Banner from "./BuyerBanner";
import FlatListed from "./FlatListed";
import NewProperties from "./NewProperties";
import PopularProperties from "./PopularProperties";
import Testimonials from "./Testimonials";

const Buyer = () => {
  return (
    <div>
      <Banner></Banner>
      <FlatListed></FlatListed>
      <PopularProperties></PopularProperties>
      <NewProperties></NewProperties>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Buyer;
