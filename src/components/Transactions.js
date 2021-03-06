import React, {Component} from "react";

//adding some bootstrap
import "bootstrap/dist/css/bootstrap.css";

class Transactions extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {transactions} = this.props;
    console.log("props of Transactions component =>", this.props);

    return (
      <div>
        <div className="card text-center">
          <div className="card-header">Transactions</div>
          <div className="card-block">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Symbol</th>
                  <th scope="col">Type</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map(transaction => {
                  return (
                    <tr style={{textAlign: "left"}}>
                      <td>{transaction.date}</td>
                      <td>{transaction.symbol}</td>
                      <td>{transaction.transaction}</td>
                      <td>{transaction.quantity}</td>
                      <td>{transaction.price}</td>
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

export default Transactions;
