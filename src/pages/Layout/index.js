import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import "./index.css";

export const Layout = () => {
  return (
    <div className="main">
      <Header />
      <Outlet />
    </div>
  );
};
