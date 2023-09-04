import { useContext, useEffect, useState } from "react";
import banner from "./../../assets/images/banner/3.jpg";
import { AuthContext } from "../../contexts/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbArrowBackUp } from "react-icons/tb";
import SubBanner from "../../components/shared/subBanner/SubBanner";

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

  const handleDeleteBookings = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure you want to delete all bookings!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete all!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings?email=${user.email}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your all booking has been deleted.", "success");
              setBookings([]);
            }
          });
      }
    });
  };

  return (
    <div>
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
        {bookings.length === 0 && (
          <h2 className="text-center text-3xl">You have not booked any service yet.</h2>
        )}
        <div className="flex justify-around mt-14">
          <button className="btn capitalize">
            <Link to={"/services"} className="flex items-center text-[#444] text-xl">
              <TbArrowBackUp className="me-5 text-3xl" />
              Continue Shopping
            </Link>
          </button>
          <button
            disabled={bookings.length === 0 && "disabled"}
            onClick={handleDeleteBookings}
            className="btn capitalize text-[#444] text-xl hover:bg-[#FF3811] hover:text-white duration-500"
          >
            <RiDeleteBinLine className="me-4 text-3xl" />
            Clear Shopping Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
