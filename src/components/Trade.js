// reg component
import React, {Component} from "react";

//adding some bootstrap
import "bootstrap/dist/css/bootstrap.css";

class Trade extends Component {
  constructor(props) {
    super();
    this.state = {
      quanity: 0
    };
    this.setTotal = this.setTotal.bind(this);
  }

  //if the quantity input changes, change the state
  //so that the total can be calculated
  setTotal(e) {
    if (e.target.id === "quantity") {
      console.log("e.target.value for quantity =>", e.target.value);
      this.setState({
        quantity: e.target.value
      });
    }
  }

  componentDidMount() {}
  render() {
    console.log("trade props => ", this.props);
    const {onSubmit} = this.props;

    //grabbing some stuff from the state that the link gave me
    const currentStockPrice = this.props.location.state.stock.dates[0].closing;
    const currentStockSymbol = this.props.location.state.stock.name;
    const currentStockDate = this.props.location.state.stock.dates[0].date;

    console.log("currentStockPrice =>", currentStockPrice);
    console.log("currentStockDate =>", currentStockDate);
    console.log("currentStockSymbol =>", currentStockSymbol);

    return (
      <div>
        <div className="card text-center">
          <div className="card-header">Trade</div>
          <div className="card-block">
            {" "}
            <div className="row">
              <div className="col-xl-6 offset-xl-2">
                <form
                  id="trade-form"
                  onChange={this.setTotal}
                  onSubmit={onSubmit}
                  className="form-group"
                  style={{marginTop: "10px", marginLeft: "30px"}}
                >
                  <div className="form-group row">
                    <label
                      htmlFor="example-text-input"
                      className="col-2 col-form-label"
                    >
                      Symbol
                    </label>
                    <div className="col-10">
                      <input
                        className="form-control"
                        type="text"
                        name="symbol"
                        defaultValue={currentStockSymbol}
                        id="example-text-input"
                        style={{width: "500px"}}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="example-text-input"
                      className="col-2 col-form-label"
                    >
                      Buy/Sell
                    </label>
                    <div className="col-10">
                      <input
                        className="form-control"
                        type="text"
                        name="transaction"
                        placeholder="Enter buy or sell"
                        id="example-text-input"
                        style={{width: "500px"}}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="quantity" className="col-2 col-form-label">
                      Quantity
                    </label>
                    <div className="col-10">
                      <input
                        className="form-control"
                        type="text"
                        name="quantity"
                        placeholder="Enter quantity"
                        id="quantity"
                        style={{width: "500px"}}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="example-text-input"
                      className="col-2 col-form-label"
                    >
                      Date
                    </label>
                    <div className="col-10">
                      <input
                        className="form-control"
                        type="text"
                        name="date"
                        defaultValue={currentStockDate}
                        id="example-text-input"
                        style={{width: "500px"}}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="example-text-input"
                      className="col-2 col-form-label"
                    >
                      Price
                    </label>
                    <div className="col-10">
                      <input
                        className="form-control"
                        type="text"
                        name="price"
                        defaultValue={currentStockPrice}
                        id="example-text-input"
                        style={{width: "500px"}}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="example-text-input"
                      className="col-2 col-form-label"
                    >
                      Total
                    </label>
                    <div
                      className="col-10"
                      style={{textAlign: "left"}}
                      style={{
                        textAlign: "left",
                        marginTop: "6px",
                        color: "blue"
                      }}
                    >
                      $ {Number(this.state.quantity) * currentStockPrice}
                    </div>
                  </div>
                  <input
                    type="submit"
                    className="btn btn-success"
                    style={{marginLeft: "60px"}}
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted">
            Data pulled from Quandl API
          </div>
        </div>
      </div>
    );
  }
}

export default Trade;
