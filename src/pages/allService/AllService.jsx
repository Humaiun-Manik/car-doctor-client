import Services from "../../components/shared/services/Services";
import SubBanner from "../../components/shared/subBanner/SubBanner";

import banner from "./../../assets/images/banner/4.jpg";

const AllService = () => {
  return (
    <div>
      <SubBanner banner={banner} title={"All Service"}></SubBanner>
      <div className="my-32">
        <Services></Services>
      </div>
    </div>
  );
};

export default AllService;
