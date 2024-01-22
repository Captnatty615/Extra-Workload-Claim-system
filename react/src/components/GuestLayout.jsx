import { Outlet, Navigate } from "react-router-dom";
import { UserStateContext } from "../context/contextProvider";
import myImage from '../../../logo.png'
import Footer from "../admin/Footer";

export default function GuestLayout() {

  const { userToken, userRole } = UserStateContext();

  if (userToken) {
    if (userRole == 'lecturer') {
      return <Navigate to="/Personal" />;
    } else if (userRole == 'admin') {
      return <Navigate to="/Dashboard" />;
    }
   
  } 

  
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-20 w-auto"
              src={myImage}
              alt="IFM"
            />
          </div>
          <main>
            <Outlet />
          </main>
          <br></br>
                <Footer />
        </div>
      </>
    )
  }
  
