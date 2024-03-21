import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
// import Blogs from "../assets/pages/Blogs";
// import Bookmarks from "../assets/pages/Bookmarks";
// import Home from "../assets/pages/Home";

const Layout = () => {
  return (
    <main>
      <div className="h-[66px]">
        <Nav />
      </div>
      <div className="min-h-[calc(100vh-116px)]">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
