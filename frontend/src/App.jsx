import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 로그인 */}
        <Route path="/" element={<Login />} />

        {/* 회원가입 */}
        <Route path="/signup" element={<Signup />} />

        {/* 유저 */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 관리자 */}
        <Route path="/admin" element={<Admin />} />

      </Routes>
    </BrowserRouter>
  );
}