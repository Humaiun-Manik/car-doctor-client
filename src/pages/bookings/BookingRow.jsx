const BookingRow = ({ booking }) => {
  const { img, service, price, date } = booking;
  return (
    <tr className="text-[#444] text-base md:text-xl font-semibold">
      <th>
        <button className="btn btn-xs md:btn-lg btn-circle btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="w-12 h-12 md:w-40 md:h-40 rounded-xl">
            <img src={img} alt="service" />
          </div>
        </div>
      </td>
      <td>
        <h4>{service}</h4>
      </td>
      <td>Price: ${price}</td>
      <td>{date}</td>
      <th>
        <button className="btn bg-[#FF3811] text-white text-xl font-semibold capitalize hover:text-[#FF3811] duration-500">
          Pending
        </button>
      </th>
    </tr>
  );
};

export default BookingRow;
