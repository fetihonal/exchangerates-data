import React from "react";
import { useSelector } from "react-redux";
import currencyTextMask from "../../utils/currency";

import "./index.scss";

const History = () => {
  const history = useSelector((content) => content.history);

  if (history) {
    return (
      <div className="history-box">
        <h2>Exchange History</h2>
        <ul>
          {history?.data.map((i, key) => (
            <li key={key}>
              <span>({i.date}) : </span>
              <strong>
                {`${i.query.amount} ${i.query.from} = ${
                  currencyTextMask(
                    parseFloat(i.result).toFixed(2).toString(),
                    2,
                    ",",
                    ".",
                    false
                  ).maskedValue
                }
              ${i.query.to}`}
              </strong>
            </li>
          ))}
        </ul>
      </div>
    );
  } else return false;
};
export default History;
