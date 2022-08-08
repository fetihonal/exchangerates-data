import { useEffect, useState } from "react";
import axios from "axios";

export default function useGetData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "exchangerates_data/symbols", {
        headers: {
          apikey: process.env.REACT_APP_API_KEY,
        },
      })
      .then(function (response) {
        setData(response.data.symbols);
      })
      .catch(function (error) {});
  }, []);

  return { data };
}
