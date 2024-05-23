import { Link, Outlet } from "react-router-dom";
import './custom-styles.css';

export default function TablesPage() {
  return (
    <div className="bg-color4 w-screen h-screen flex flex-col justify-center items-center overflow-auto">
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
