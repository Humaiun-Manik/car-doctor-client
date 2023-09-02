import { createContext, useEffect, useState } from "react";

export const ServiceContext = createContext(null);

const ServiceProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          setLoading(true);
        } else {
          setLoading(false);
          setServices(data);
        }
      });
  }, []);

  const service = { services, loading };

  return <ServiceContext.Provider value={service}>{children}</ServiceContext.Provider>;
};

export default ServiceProvider;
