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

            <div style={{ color: '#B2AB8C', marginTop: '20px', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>


                <div style={{ backgroundColor: '#293B5F', width: 'fit-content', border: '3px solid black', borderRadius: '4px', marginTop: '50px', padding: '30px', paddingTop: '30px' }}>

                    <p>Login Here</p>
                    <button style={{ borderRadius: '4px', backgroundColor: '#B2AB8C' }} onClick={() => signInWithGoogle(location, history)}> <i class="fab fa-google"></i> Google SignIn</button> <br /> <br />
                    <p>--------------Or--------------</p>
                    {
                        !isLoading && <form onSubmit={handleLoginSubmit} >

                            <small>Login with Email & Password</small><br /><br />
                            <input name="email" type="email" onBlur={handleOnChange} placeholder='Enter your Email' required style={{ border: '2px solid black', marginBottom: '10px', backgroundColor: '#B2AB8C', borderRadius: '4px' }} /> <br />
                            <input type="password" name="password" onBlur={handleOnChange} placeholder='Enter password' required style={{ border: '2px solid black', marginBottom: '10px', backgroundColor: '#B2AB8C', borderRadius: '4px' }} /> <br />


                            <button style={{ border: '2px solid black', color: 'white', backgroundColor: 'green', borderRadius: '4px', marginBottom: '10px' }}>Login Now</button>  <br />

                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/register">
                                <button variant="text" style={{ border: '2px solid black', marginBottom: '10px', backgroundColor: '#9EC4E5', borderRadius: '4px' }}> Not Registered yet? Register Now</button>
                            </NavLink>
                        </form>
                    }
                    {authError && <p>{authError}</p>}


                </div>



            </div>


        </div>
    );
};

export default Login;