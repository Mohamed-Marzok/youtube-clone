import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import NotificationsModal from "../components/models/NotificationsModal";

export default function Main() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <NotificationsModal />

      <div className="mt-20">
        <Outlet />
      </div>
    </div>
  );
}
