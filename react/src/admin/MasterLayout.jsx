import Navbar from "./Navbar";
import Footer from "./Footer";
import "../assets/css/styles.css";
import "../assets/js/scripts";
import { Outlet, useNavigate } from "react-router-dom";
import { UserStateContext } from '../context/contextProvider'

export default function MasterLayout() {
    const { userToken, userRole } = UserStateContext();
    let navigate = useNavigate();
  if (!userToken) {
    navigate('/login')
    }
    switch (userRole) {
        case 'lecturer':
            navigate('/Personal')
            break
   }
    return (
        <>
            
            <div>
                <Navbar /> 
                <br></br>
          <div>
                    <div>
                        <main>
                            <Outlet />
                        </main>
                        <br></br>
                        <Footer />
                    </div>
          </div>
          </div>
      </>
      
  )
}