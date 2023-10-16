import { useState, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { store } from "./store";
import "./styles/all.scss";
import { Spin } from "antd";
import DashboardLayout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <Suspense
        fallback={
          <div
            id="loading-wrapper"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            <Spin tip="Loading" size="small" />
          </div>
        }
      >
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard/*" element={<DashboardLayout />} />
          </Routes>{" "}
        </BrowserRouter>
      </Suspense>
    </Provider>
  );
}

export default App;
