import axios from "axios";
export const getSymbolsOptions = (list) => {
  var symbols = [];
  Object.keys(list).map((item, key) => {
    symbols.push({ label: item, value: list[item] });
  });
  return symbols;
};

export const convert = (to, from, amount) => {
  return axios
    .get(
      `${process.env.REACT_APP_API_URL}exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
      {
        headers: {
          apikey: process.env.REACT_APP_API_KEY,
        },
      }
    )
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {});
};
