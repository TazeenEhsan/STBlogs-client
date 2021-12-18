import React from 'react';

import { Link } from 'react-router-dom';



import './Header.css'

const Header = () => {



    return (
        <div className="pt-5">

            <div className="row gx-0">
                <div className="col-lg-4 col-sm-12 ">
                    <Link className="nav-con-link" to="/home"> <h4>ST Blog</h4></Link>

                    {/* <p>hi:{isLogged}</p> */}
                    {/* <button onClick={() => dispatch(signInWithGoogle())}>Sign koro</button> */}

                    {/* <button onClick={() => dispatch(outInWithGoogle())}>Sign out koro</button> */}


                </div>
                <div className="col-lg-8 col-sm-12">

                    <Link className="nav-con-link" to="/home">Home</Link>

                    <Link className="nav-con-link" to="/contact">Contact Me</Link>
                    <Link className="nav-con-link" to="/login">Login</Link>


                    {/* <a className="nav-con-link" href="https://drive.google.com/file/d/1_F5g7i09uyqXG7hfH6N1_DGPFryKpsCg/view?usp=sharing" target="_blank">Download Resume</a> */}
                </div>

            </div>

        </div>






    );
};

export default Header;