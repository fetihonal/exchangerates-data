const data = require("./data.json");
const getSymbolsOptions = require("../services/index").getSymbolsOptions;

test("Sembolleri Selectbox option data modeline uyarlama", () => {
  var symbolsOptionsExpected = [
    {
      label: "AED",
      value: "United Arab Emirates Dirham",
    },
    {
      label: "AFN",
      value: "Afghan Afghani",
    },
    {
      label: "ALL",
      value: "Albanian Lek",
    },
  ];
  expect(getSymbolsOptions(data)).toEqual(
    expect.arrayContaining(symbolsOptionsExpected)
  );
});
