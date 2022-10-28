import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import React, { Suspense } from "react";
import App from "./App";
import Loading from "./components/Loading";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </Router>
    </Provider>
  </StrictMode>
);
