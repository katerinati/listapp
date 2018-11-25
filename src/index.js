import React from "react"
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux"
import { Provider } from "react-redux"
import mainReducer from "./redux/reducers"

const store = createStore(mainReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);