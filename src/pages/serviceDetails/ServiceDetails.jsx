import SubBanner from "../shared/subBanner/SubBanner";
import banner from "./../../assets/images/banner/1.jpg";

const ServiceDetails = () => {
  return (
    <div>
      <SubBanner banner={banner} pageName={"Service Details"} />
      <h1>this is service details</h1>
    </div>
  );
};

export default ServiceDetails;
