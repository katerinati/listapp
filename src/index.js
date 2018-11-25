import React from "react"
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux"
import { Provider } from "react-redux"
import mainReducer from "./redux/reducers"
import { saveState, loadState } from './helpers/localStorage'
import "reset-css"

const persistedState = loadState();
const store = createStore(mainReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);