import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

export const BookingContext = createContext(null);

const BookingProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user?.email]);

  return <BookingContext.Provider value={bookings}>{children}</BookingContext.Provider>;
};

export default BookingProvider;
