import React, {Component} from "react";

//getting some Links to use
import {Link} from "react-router-dom";

//adding some bootstrap
import "bootstrap/dist/css/bootstrap.css";

class Portfolio extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {transactions, stocks} = this.props;

    //merge the transactions
    const mergeValue = transactionsArray => {
      let obj = {};

      transactionsArray.forEach(transaction => {
        if (transaction.transaction === "buy") {
          obj[transaction.symbol]
            ? (obj[transaction.symbol] +=
                Number(transaction.quantity) * Number(transaction.price))
            : (obj[transaction.symbol] =
                Number(transaction.quantity) * Number(transaction.price));
        } else {
          obj[transaction.symbol]
            ? (obj[transaction.symbol] -=
                Number(transaction.quantity) * Number(transaction.price))
            : (obj[transaction.symbol] = -(
                Number(transaction.quantity) * Number(transaction.price)
              ));
        }
      }); //merges them into object of keys symbol and values total amount

      return obj;
    };

    //merge the transactions
    const mergeQuantity = transactionsQuantity => {
      let obj = {};

      transactionsQuantity.forEach(transaction => {
        if (transaction.transaction === "buy") {
          obj[transaction.symbol]
            ? (obj[transaction.symbol] += Number(transaction.quantity))
            : (obj[transaction.symbol] = 1);
        } else {
          obj[transaction.symbol]
            ? (obj[transaction.symbol] -= Number(transaction.quantity))
            : (obj[transaction.symbol] = -1);
        }
      }); //merges them into object of keys symbol and values total quantity

      return obj;
    };

    let mergedTransactionsValue = mergeValue(transactions);
    let mergedTransactionsQuantity = mergeQuantity(transactions);
    console.log("mergedTransactionsValue => ", mergedTransactionsValue);
    console.log("mergedTransactionsQuantity => ", mergedTransactionsQuantity);

    let mergedSymbolsArr = Object.keys(mergedTransactionsValue);

    //merge the today's price of the stocks
    let mergedStocks = {};
    stocks.forEach(stock => {
      mergedStocks[stock.name] = stock.dates[0].closing;
    });
    console.log("mergedStocks => ", mergedStocks);

    //merge the 1day price of the stocks
    let mergedStocks1Day = {};
    stocks.forEach(stock => {
      mergedStocks1Day[stock.name] =
        Math.trunc((stock.dates[0].closing - stock.dates[1].closing) * 10) / 10;
    });
    console.log("mergedStocks1Day => ", mergedStocks1Day);

    //merge the 7day price of the stocks
    let mergedStocks7Day = {};
    stocks.forEach(stock => {
      mergedStocks7Day[stock.name] =
        Math.trunc((stock.dates[0].closing - stock.dates[6].closing) * 10) / 10;
    });
    console.log("mergedStocks7Day => ", mergedStocks7Day);

    //merge the 7day price of the stocks
    let mergedStocks30Day = {};
    stocks.forEach(stock => {
      mergedStocks30Day[stock.name] =
        Math.trunc(
          (stock.dates[0].closing -
            stock.dates[stock.dates.length - 1].closing) *
            10
        ) / 10;
    });
    console.log("mergedStocks30Day => ", mergedStocks30Day);

    //unique key error
    let key = 0;

    return (
      <div>
        <div className="card text-center">
          <div className="card-header">Portfolio</div>
          <div className="card-block">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">Symbol</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Current Value</th>
                  <th scope="col">Profit/Loss</th>
                  <th scope="col">Current Price</th>
                  <th scope="col">1 day</th>
                  <th scope="col">7 day</th>
                  <th scope="col">30 day</th>
                  <th scope="col">Trade? </th>
                </tr>
              </thead>
              <tbody>
                {mergedSymbolsArr.map(symbol => {
                  return (
                    <tr key={key++} style={{textAlign: "left"}}>
                      <td>{symbol}</td>
                      <td>{mergedTransactionsQuantity[symbol]}</td>
                      <td>$ {mergedTransactionsValue[symbol]}</td>
                      <td>
                        {mergedTransactionsValue[symbol] -
                          mergedTransactionsQuantity[symbol] *
                            mergedStocks[symbol]}
                      </td>
                      <td>$ {mergedStocks[symbol]}</td>
                      <td>{mergedStocks1Day[symbol]}</td>
                      <td>{mergedStocks7Day[symbol]}</td>
                      <td>{mergedStocks30Day[symbol]}</td>
                      <td>
                        <Link
                          to={{
                            pathname: "/trade",
                            state: {
                              stock: stocks.find(stock => {
                                if (stock.name == symbol) {
                                  return true;
                                } else {
                                  return false;
                                }
                              })
                            }
                          }}
                        >
                          {" "}
                          Trade{" "}
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="card-footer text-muted">2 days ago</div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
