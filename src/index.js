import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { Store } from "./Review/Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
