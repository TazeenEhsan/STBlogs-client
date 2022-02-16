import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {


    const [loginData, setLoginData] = useState({});

    const history = useHistory();

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;

        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    // console.log(loginData);


    return (
        <div className='container'>
            {/* <div> */}
            <div style={{
                color: '#B2AB8C', marginTop: '50px', paddingBottom: '30px', display: 'flex', justifyContent: 'center', paddingTop: '30px'
            }}>


                {
                    !isLoading && <form onSubmit={handleLoginSubmit} style={{
                        backgroundColor: '#293B5F', border: '3px solid #B2AB8C', padding: '56px', width: 'fit-content'
                    }}>
                        <p>Register Here</p>

                        <input name="name" type="text" onBlur={handleOnBlur} placeholder='Enter your Name' required style={{ border: '2px solid black', marginBottom: '10px', borderRadius: '4px' }} /> <br />
                        <input name="email" type="email" onBlur={handleOnBlur} placeholder='Enter your Email' required style={{ border: '2px solid black', marginBottom: '10px', borderRadius: '4px' }} /> <br />
                        <input type="password" name="password" onBlur={handleOnBlur} placeholder='Enter password' required style={{ border: '2px solid black', marginBottom: '10px', borderRadius: '4px' }} /> <br />
                        <input type="password" name="password2" onBlur={handleOnBlur} placeholder='Re-type password' required style={{ border: '2px solid black', marginBottom: '10px', borderRadius: '4px' }} /> <br />

                        <button style={{ border: '2px solid black', color: 'white', backgroundColor: '#385FAB', borderRadius: '4px', marginBottom: '10px' }}>Register Now</button>  <br />

                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <button variant="text" style={{ border: '2px solid black', backgroundColor: 'gold', marginBottom: '10px', borderRadius: '4px' }}>Registered ? Please Login</button>
                        </NavLink>
                    </form>
                }
                {authError && <p>{authError}</p>}

            </div>
            {/* </div> */}

        </div >
    );
};

export default Register;