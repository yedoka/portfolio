import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
        <main>
          <Outlet />
        </main>
      <Footer />
    </div>
  );
};

export default Root;
