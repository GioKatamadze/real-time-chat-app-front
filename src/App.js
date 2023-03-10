import "./reset.css";
import "./index.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "routing/protectedRoute.js";
import SignIn from "pages/sign-in/signin.jsx";
import SignUp from "pages/sign-up/signup.jsx";
import Home from "pages/home/home.jsx";
import ChatRoom from "pages/chatroom/ChatRoom.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div style={{ maxWidth: "100%", height: "100%" }}>
      <Toaster />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chatroom/:id" element={<ChatRoom />} />
      </Routes>
    </div>
  );
}

export default App;
