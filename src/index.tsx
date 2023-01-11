import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import App from "./App";
import counter from "./reducers";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

const store = createStore(counter);
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

root.render(
  <StrictMode>
    <App value={store.getState()} />
  </StrictMode>
);
