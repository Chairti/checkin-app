import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import "../../public/img/12345.png";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      localStorage.setItem("user", username); // mock login
      navigate("/checkin");
    } else {
      alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
    <div className="login-container">
      <div class="logo-wrapper">
        <img src="../../public/img/12345.png" alt="Logo" className="logo" />
      </div>
      <h2>ระบบลงเวลาเข้างาน</h2>
      <form action="#">
        <div className="form-group">
          {/* <label for="username">Username</label> */}
          <input
            type="text"
            id="username"
            placeholder="ชื่อผู้ใช้"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div class="form-group">
          {/* <label for="password">Password</label> */}
          <input
            type="password"
            placeholder="รหัสผ่าน"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleLogin} class="login-btn">
          เข้าสู่ระบบ
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
