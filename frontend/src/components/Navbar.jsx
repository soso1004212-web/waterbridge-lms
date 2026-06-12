import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div
      style={{
        height: "70px",
        background: "#fff",
        borderBottom: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 30px"
      }}
    >
      <h3>WaterBridge LMS</h3>

      <div>
        {user?.email}

        <button
          onClick={logout}
          style={{ marginLeft: "15px" }}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}