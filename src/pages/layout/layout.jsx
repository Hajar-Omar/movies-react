import { Outlet } from "react-router-dom";
import Header from "../../components/header/header";
const Layout = () => {
  return (
    <>
      <Header />
      <div className="p-5">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
