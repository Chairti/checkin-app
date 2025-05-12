import { useState } from "react";
const user = localStorage.getItem("user");
import Sidebar from "../components/Sidebar";

function CheckinPage() {
  const [time, setTime] = useState(null);
  const [location, setLocation] = useState({ lat: null, lng: null });

  const handleCheckin = () => {
    const now = new Date();
    setTime(now.toLocaleString());

    // ดึงตำแหน่ง GPS
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        alert("ไม่สามารถดึงพิกัดได้");
        console.error(error);
      }
    );
  };

  return (
    <div style={{ marginLeft: "200px", padding: 20 }}>
      <Sidebar />
      <h1>หน้าเช็คอินพนักงาน : ยินดีต้อนรับ {user}</h1>
      <button onClick={handleCheckin}>เช็คอิน</button>

      {time && <p>คุณเช็คอินเมื่อ: {time}</p>}

      {location.lat && (
        <p>
          พิกัดของคุณคือ: Lat {location.lat}, Lng {location.lng}
        </p>
      )}
    </div>
  );
}

export default CheckinPage;
