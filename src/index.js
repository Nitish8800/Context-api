import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartContextProvider } from "./contexts/cartContext";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </StrictMode>,
  rootElement
);
