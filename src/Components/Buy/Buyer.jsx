import Banner from "./BuyerBanner";
import NewProperties from "./NewProperties";
import PopularProperties from "./PopularProperties";

const Buyer = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularProperties></PopularProperties>
      <NewProperties></NewProperties>
    </div>
  );
};

export default Buyer;
