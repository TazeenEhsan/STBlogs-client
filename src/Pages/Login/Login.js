import React, { useState } from 'react';

import { NavLink, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Login = () => {

    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const history = useHistory();

    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    // console.log(user);

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    // console.log(loginData);
    return (
        <div className='container'>

            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div style={{ width: '540px', paddingTop: '150px', backgroundColor: '#c6c6c6', borderRadius: '5px', height: '650px', textAlign: 'center' }}>

                        <button onClick={() => signInWithGoogle(location, history)}>Google Sign</button>
                        <div style={{ border: '3px solid black', marginTop: '50px', paddingBottom: '30px', paddingTop: '30px' }}>

                            <p>Login Form</p>
                            {
                                !isLoading && <form onSubmit={handleLoginSubmit}>


                                    <input name="email" type="email" onBlur={handleOnChange} placeholder='Enter your Email' required style={{ border: '2px solid black', marginBottom: '10px', borderRadius: '4px' }} /> <br />
                                    <input type="password" name="password" onBlur={handleOnChange} placeholder='Enter password' required style={{ border: '2px solid black', marginBottom: '10px', borderRadius: '4px' }} /> <br />


                                    <button style={{ border: '3px solid black', color: 'white', backgroundColor: 'green', borderRadius: '4px', marginBottom: '10px' }}>Login</button>  <br />

                                    <NavLink
                                        style={{ textDecoration: 'none' }}
                                        to="/register">
                                        <button variant="text" style={{ border: '2px solid black', marginBottom: '10px', borderRadius: '4px' }}> Not Registered yet? Register Now</button>
                                    </NavLink>
                                </form>
                            }
                            {authError && <p>{authError}</p>}


                        </div>
                    </div>

                </div>
                <div className="col-lg-3">

                </div>
            </div>


        </div>
    );
};

export default Login;