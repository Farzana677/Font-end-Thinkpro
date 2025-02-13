import { Outlet } from "react-router";
import Sidebar from "../../components/sidebar";

const Layout = () => {
  return (
    <>
      {/* Sidebar as top navigation */}
      <header className=" bg-white bg-opacity-80 backdrop-blur-sm top-0 sticky z-10 ">
        <Sidebar />
      </header>

      {/* Main content */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
