import { useState, useEffect } from "react";
import axios from "axios";

export const useMenuItemsData = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/menu-items");
      data && setData(data);
    } catch ({ message }) {
      console.log(message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, fetchData };
};
