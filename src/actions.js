export const GET_REQUEST = "GET_REQUEST";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAILURE = "GET_FAILURE";

// Starts request
export function getRequest() {
  return {
    type: GET_REQUEST
  };
}

// Sends successful data response to reducer
export function getSuccess(data) {
  //data will be {films: }
  return {
    type: GET_SUCCESS,
    data
  };
}

// Sends the response error to the reducer
export function getFailure(error) {
  return {
    type: GET_FAILURE,
    error
  };
}

//action to get 30 stocks and info
export function getInitialStocks(/*input later*/) {
  const baseUrl = "https://www.quandl.com/api/v3/datasets/EOD/";
  const quandleAPIKey = "BJQ4TqSUVtTDysdfSCxZ";
  const stockList = ["AAPL", "GOOG", "MSFT", "NVDA", "FB", "AMZN", "LNKD", "INTC", "TWTR", "TSLA"];
  let currentDate = new Date().toISOString().split("T")[0];

  return async dispatch => {
    try {
      dispatch(getRequest());

      fetch(
        `${baseUrl}${stock}.json?api_key=${
          quandleAPIKey
        }&start_date=${startDate}&end_date=${currentDate}`
      )
      .then(response => {
      return response.json();
    })
    .then(response => {
      let todayClose = response.dataset.data[0][4];
      console.log(todayClose)
    })
    } catch (e) {
      console.err(e);
    }
  };
}
