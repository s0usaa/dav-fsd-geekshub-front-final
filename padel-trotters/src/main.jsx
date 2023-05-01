import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { MainApp } from "./layout/MainApp";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import store from "./app/store";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
