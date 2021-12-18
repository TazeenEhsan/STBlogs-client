import React from 'react';
import useAuth from '../../../hooks/useAuth';

const AboutMe = () => {

    const { user } = useAuth();
    console.log(user);
    return (
        <div>




            <img style={{ textAlign: 'start', width: '270px', height: '240px', border: '2px solid red' }} src={user.photoURL} alt="no image" />

            <p>Name: {user.displayName}</p>
            <p>Email: {user.email}</p>





        </div>
    );
};

export default AboutMe;