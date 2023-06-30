import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
import Logo from '../Logo/Logo.png';
// import IntSwitch1 from '../Logo/IntSwitch1.jpg'
import IntSwitch2 from '../Logo/IntSwitch2jpg.png'
// import IntSwitch3 from '../Logo/IntSwitch3.png'


export const Navbar = () => {
     // let navigate = useNavigate();

     // const handleLogout = () => {
     //      localStorage.removeItem('token');
     //      navigate('/');
     // }

     // let location = useLocation();    //useloaction is a hook in reac-router-dom that return a path or location where we click or work.

     return (
          <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: 'white' }}>
               <div className="container-fluid">
                    <div className="header1">
                         <Link to="/"> <img src={IntSwitch2} alt="Logo" className='logo1' /> </Link>
                    </div>
                    <div className="d-flex">
                         <li className="nav-item">
                              <img src={Logo} alt="Logo" className='logo11' />
                         </li>
                    </div>
               </div>
          </nav>
     )
}


