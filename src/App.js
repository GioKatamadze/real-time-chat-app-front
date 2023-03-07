import "./reset.css";
import "./index.css";

import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "routing/protectedRoute.js";

import SignIn from "pages/sign-in/signin";

function App() {
  return (
    <div style={{ maxWidth: "100%", height: "100%" }}>
      <Routes>
        <Route element={<ProtectedRoute />}>
          {/* <Route path="/" element={<Home />} /> */}
        </Route>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
