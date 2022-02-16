import React from 'react';
import useAuth from '../../../hooks/useAuth';

const AboutMe = () => {

    const { user, admin } = useAuth();
    // console.log(user);
    return (
        <div style={{ color: 'wheat' }}>




            <img style={{ textAlign: 'start', borderRadius: '100%' }} src={user.photoURL} alt="no image" />

            <p>Name: {user.displayName}</p>
            {
                admin && <h6>Role: Admin</h6>
            }
            <p>Email: {user.email}</p>





        </div>
    );
};

export default AboutMe;