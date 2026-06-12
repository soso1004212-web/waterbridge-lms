import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        background: "#111827",
        color: "#fff",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <h2>WB LMS</h2>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginTop: "30px"
        }}
      >
        <Link to="/dashboard">대시보드</Link>
        <Link to="/courses">강의</Link>
        <Link to="/exam">시험</Link>
        <Link to="/certificate">수료증</Link>
        <Link to="/admin">관리자</Link>
      </nav>
    </div>
  );
}