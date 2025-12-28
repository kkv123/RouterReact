import { Outlet } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Headers from "./components/Header/Headers";

export default function Layout({ children }) {
  return (
    <>
       <Headers/>
       {/* this help to provide routing like in between Header & Footer we can call api that will not reload all part */}
       <Outlet />
       <Footer />
    </>
  );
}