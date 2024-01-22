import Navbar from "./Navbar";
import Footer from "./Footer";
import "../assets/admin/css/styles.css";
import "../assets/admin/js/scripts";
import { Outlet, Navigate } from "react-router-dom";
import { UserStateContext } from '../context/contextProvider'

export default function MasterLayout() {
    const {userToken, userRole } = UserStateContext();
  if (!userToken) {
    return <Navigate to='login' />
    }
    if (userRole !== 'admin') {
        return <Navigate to="/Personal" />;
}
    return (
        <>
            <div className="sb-nav-fixed">
          <Navbar /> 
          <div id="layoutSidenav">
                    <div id="layoutSidenav_content">
                        <main>
                            <Outlet />
                        </main>
                        <Footer />
                    </div>
          </div>
          </div>
      </>
      
  )
}