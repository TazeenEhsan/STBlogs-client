import React from 'react';

import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Login = () => {



    const location = useLocation();
    const history = useHistory();

    const { signInWithGoogle, user } = useAuth()



    return (
        <div className='container'>

            <button onClick={() => signInWithGoogle()}>Google Sign</button>
            <p>user:{user.displayName}</p>


            {/* <button onClick={() => dispatch(signOutWithGoogle())}>Google Sign Out</button> */}
        </div>
    );
};

export default Login;