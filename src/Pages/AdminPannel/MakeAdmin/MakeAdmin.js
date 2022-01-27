import React from 'react';
import { useState } from 'react';

import { Alert } from 'bootstrap';


import { useHistory } from 'react-router';



const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const history = useHistory();

    const handleOnBlur = e => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    alert('Successfully Create an admins')
                    history.push('/adminpannel');
                    setSuccess(true);
                }
                else {
                    alert('User is already an admin or post a Wrong Email')
                }
            })

        e.preventDefault()
    }

    return (
        <div>

            <h2>Make an Admin....</h2>
            <form onSubmit={handleAdminSubmit}>

                <input
                    style={{ width: '70%', border: '1px solid red' }}
                    label="Type an user's Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" required />
                <br />
                <br />
                <br />
                <button type="submit" variant="contained">Make Admin</button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;