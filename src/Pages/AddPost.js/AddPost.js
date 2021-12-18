import React, { useRef } from 'react';
import { useHistory } from 'react-router';
// import useAuth from '../../hooks/useAuth';
import useAuth from '../../hooks/useAuth'

import './AddPost.css'

// import swal from 'sweetalert';//

const AddPost = () => {
    const nameRef = useRef();

    const descriptionRef = useRef();
    const imgRef = useRef();

    const history = useHistory();

    const { user } = useAuth();

    const handleAddUser = e => {



        const name = nameRef.current.value;

        const description = descriptionRef.current.value;
        const img = imgRef.current.value;

        const userEmail = user.email;

        const newUser = { name, userEmail, description, img };


        fetch('https://guarded-thicket-98440.herokuapp.com/blogposts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // alert('Successfully added the user.')
                    // swal("Successfully added New Product!!!");
                    e.target.reset();
                    history.push('/home')
                }
            })

        e.preventDefault();
    }
    return (
        <div>
            <h2>New Post</h2>
            <div className="container adding-form">
                <form onSubmit={handleAddUser}>
                    <input type="text" ref={nameRef} placeholder="Post Title" required /> <br />
                    <input type="text" ref={imgRef} placeholder="Image URL" required />

                    <textarea name="message" className="" ref={descriptionRef} placeholder="Content Description" required></textarea>


                    <br /><button className="btn btn-danger" type="submit">Create</button>
                </form>
            </div>

        </div>
    );
};

export default AddPost;