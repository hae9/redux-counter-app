import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import App from "./App";
import loggerMiddleware from "./middleware/log";
import rootReducer from "./reducers";

const rootElement = document.getElementById("root");
const root = rootElement && createRoot(rootElement);

const middleware = applyMiddleware(loggerMiddleware);
const store = createStore(rootReducer, middleware);

const render = () =>
  root?.render(
    <StrictMode>
      <Provider store={store}>
        <App
        // onIncrement={() => store.dispatch({ type: "INCREMENT" })}
        // onDecrement={() => store.dispatch({ type: "DECREMENT" })}
        />
      </Provider>
    </StrictMode>
  );
render();
store.subscribe(render);
