import React from 'react';

import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Login = () => {



    const location = useLocation();
    const history = useHistory();

    const { signInWithGoogle, user } = useAuth();

    console.log(user);

    return (
        <div className='container'>

            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div style={{ width: '340px', paddingTop: '150px', backgroundColor: '#c6c6c6', borderRadius: '5px', height: '350px', textAlign: 'center' }}>

                        <button onClick={() => signInWithGoogle(location, history)}>Google Sign</button>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>


            {/* <p>user:{user.displayName}</p> */}


            {/* <button onClick={() => dispatch(signOutWithGoogle())}>Google Sign Out</button> */}
        </div>
    );
};

export default Login;