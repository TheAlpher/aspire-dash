import { useState, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/all.scss";
import { Spin } from "antd";
import DashboardLayout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
