import { Outlet } from "react-router";
import Sidebar from "../../components/sidebar";
import Footer from "../footer";

const Layout = () => {
  return (
    <>
      <header className=" bg-white bg-opacity-80 backdrop-blur-sm top-0 sticky z-10 ">
        <Sidebar />
      </header>

      {/* Main content */}
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
