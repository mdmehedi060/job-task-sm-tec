import Banner from "./BuyerBanner";
import NewProperties from "./NewProperties";
import PopularProperties from "./PopularProperties";
import Testimonials from "./Testimonials";

const Buyer = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularProperties></PopularProperties>
      <NewProperties></NewProperties>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Buyer;
