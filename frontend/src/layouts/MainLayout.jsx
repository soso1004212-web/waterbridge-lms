import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <main
          style={{
            padding: "30px",
            minHeight: "100vh",
            background: "#f5f7fb"
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}