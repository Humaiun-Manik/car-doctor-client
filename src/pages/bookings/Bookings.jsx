import { useContext } from "react";
import SubBanner from "../shared/subBanner/SubBanner";
import banner from "./../../assets/images/banner/3.jpg";
import BookingRow from "./BookingRow";
import { BookingContext } from "../../contexts/BookingProvider";

const Bookings = () => {
  const bookings = useContext(BookingContext);
  console.log(bookings);
  return (
    <>
      <SubBanner banner={banner} title={"Cart Details"}></SubBanner>
      <div className="overflow-x-auto my-32">
        <table className="table">
          <tbody>
            {bookings.map((booking) => (
              <BookingRow key={booking._id} booking={booking}></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Bookings;
