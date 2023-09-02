import { Link } from "react-router-dom";

const SubBanner = ({ banner, pageName }) => {
  return (
    <div className="carousel h-96 w-full rounded-xl">
      <div className="carousel-item relative w-full">
        <img src={banner} className="w-full" />
        <div className="absolute h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <h2 className="text-[#FFF] text-5xl font-bold ps-5 md:ps-24 h-full flex items-center">
            {pageName}
          </h2>
        </div>
        <div className="absolute bottom-0 ml-12 md:right-1/3 md:mr-24 py-3 px-12  bg-[#FF3811]  rounded-t-full">
          <h2 className="text-[#FFF] text-xl font-medium">
            <Link to={"/"}>Home / </Link>
            {pageName}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SubBanner;
