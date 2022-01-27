import React from 'react';
import useAuth from '../../../hooks/useAuth';

const AboutMe = () => {

    const { user, admin } = useAuth();
    // console.log(user);
    return (
        <div>




            <img style={{ textAlign: 'start', width: '270px', height: '240px' }} src={user.photoURL} alt="no image" />

            <p>Name: {user.displayName}</p>
            {
                admin && <h6>Admin</h6>
            }
            <p>Email: {user.email}</p>





        </div>
    );
};

export default AboutMe;