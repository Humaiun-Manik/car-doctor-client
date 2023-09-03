import { useContext, useEffect, useState } from "react";
import SubBanner from "../shared/subBanner/SubBanner";
import banner from "./../../assets/images/banner/3.jpg";
import { AuthContext } from "../../contexts/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user.email]);

  const handleDeleteBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure you want to delete!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your booking has been deleted.", "success");
              const remaining = bookings.filter((booking) => booking._id !== id);
              setBookings(remaining);
            }
          });
      }
    });
  };

  return (
    <>
      <SubBanner banner={banner} title={"Cart Details"}></SubBanner>
      <div className="overflow-x-auto my-32">
        <table className="table">
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDeleteBooking={handleDeleteBooking}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Bookings;
