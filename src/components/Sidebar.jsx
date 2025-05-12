import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div
      style={{
        width: "200px",
        height: "100vh",
        background: "#f0f0f0",
        padding: "20px",
        boxSizing: "border-box",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <h3>เมนู</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <Link
            to="/checkin"
            style={{ textDecoration: "none", color: "black" }}
          >
            ✅ เช็คอิน
          </Link>
        </li>
        <li>
          <Link
            to="/history"
            style={{ textDecoration: "none", color: "black" }}
          >
            📋 ประวัติ
          </Link>
        </li>
        <li>
          <button onClick={handleLogout}>🚪 ออกจากระบบ</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
