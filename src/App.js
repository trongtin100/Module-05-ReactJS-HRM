import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import Home from "./components/main/Home";
import Staff from "./components/main/Staff";
import Department from "./components/main/Department";
import Report from "./components/main/Report";
import Config from "./components/main/Config";
import Login from "./components/main/Login";
import Checkin from "./components/main/Checkin";
import Admin from "./components/main/Admin";
import PrivateRoute from "./hoc/PrivateRoute";
import Auth from "./hoc/Auth";

function App() {
  return (
    <>
      <Auth>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/department" element={<Department />} />
          <Route path="/login" element={<Login />} />
          <Route path="/report" element={<Report />} />
          <Route path="/config" element={<Config />} />

          <Route path="/admin" element={<PrivateRoute role="Admin" />}>
            <Route path="/admin" element={<Admin />} />
          </Route>

          <Route path="/checkin" element={<Checkin />} />
        </Routes>
      </Auth>
    </>
  );
}

export default App;
