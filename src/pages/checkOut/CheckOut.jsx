import { useLoaderData } from "react-router-dom";
import SubBanner from "../shared/subBanner/SubBanner";
import banner from "./../../assets/images/banner/2.jpg";
import Swal from "sweetalert2";

const CheckOut = () => {
  const service = useLoaderData();
  const { _id, img, title, price } = service;

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const date = form.date.value;
    const message = form.message.value;
    const bookingsInfo = {
      service_id: _id,
      customerName: name,
      service: title,
      phone,
      email,
      date,
      message,
      img,
      price,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingsInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Service booked successfully",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          form.reset();
        }
      });
  };

  return (
    <div>
      <SubBanner banner={banner} pageName={"Check Out"}></SubBanner>
      <form onSubmit={handleBooking} className="my-32 p-5 md:p-24 bg-[#F3F3F3] grid md:grid-cols-2 gap-6">
        <input
          className="input w-full text-lg py-4 px-6 rounded-lg"
          type="text"
          placeholder="Your Name"
          name="name"
          required
        />
        <input
          className="input w-full text-lg py-4 px-6 rounded-lg"
          type="text"
          placeholder="Your Phone"
          name="phone"
          required
        />
        <input
          className="input w-full text-lg py-4 px-6 rounded-lg"
          type="email"
          placeholder="Your Email"
          name="email"
          required
        />
        <input
          className="input w-full text-lg py-4 px-6 rounded-lg"
          type="date"
          placeholder="Date"
          name="date"
          required
        />
        <textarea
          className="textarea md:col-span-2 h-52 text-lg py-4 px-6 rounded-lg"
          placeholder="Your Message"
          name="message"
        ></textarea>
        <input
          className="btn-block md:col-span-2 text-xl text-white font-semibold bg-[#FF3811] py-4 rounded-lg"
          type="submit"
          value="Order Confirm"
        />
      </form>
    </div>
  );
};

export default CheckOut;
