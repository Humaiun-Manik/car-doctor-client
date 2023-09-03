import { useContext, useEffect, useState } from "react";
import SubBanner from "../shared/subBanner/SubBanner";
import banner from "./../../assets/images/banner/3.jpg";
import { AuthContext } from "../../contexts/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user.email]);

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
