import React from 'react';

import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



import './Header.css'

const Header = () => {

    const { user, admin, logOut } = useAuth();

    return (
        <div className="pt-5" style={{ backgroundColor: 'black', padding: '5px' }}>

            <div className="row gx-0">
                <div className="col-lg-4 col-sm-12 ">
                    <Link className="nav-con-link" to="/home"> <h4>ST Travel Blog</h4></Link>




                </div>
                <div className="col-lg-8 col-sm-12">

                    <Link className="nav-con-link" to="/home">Home</Link>
                    {admin && <Link className="nav-con-link" to="/adminpannel">Admin Pannel</Link>}

                    <Link className="nav-con-link" to="/contact">Contact Us</Link>

                    {
                        user?.displayName ? <Link style={{ textDecoration: 'none' }} to='/home'><button onClick={logOut} style={{ border: '1px solid red', color: 'red', backgroundColor: 'black' }}>Log Out</button></Link> :
                            <Link className="nav-con-link" to="/login">Login</Link>
                    }





                </div>

            </div>

        </div>






    );
};

export default Header;