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




    const infoRef = useRef();
    const categoryRef = useRef();
    const costRef = useRef();
    const locationRef = useRef();
    const ratingRef = useRef();


    const history = useHistory();

    const { user } = useAuth();

    const handleAddUser = e => {



        const name = nameRef.current.value;
        const description = descriptionRef.current.value;
        const img = imgRef.current.value;

        const info = infoRef.current.value;
        const category = categoryRef.current.value;
        const cost = costRef.current.value;
        const location = locationRef.current.value;
        const rating = ratingRef.current.value;

        const userEmail = user.email;
        const postDate = new Date().toLocaleString();
        const status = 'pending'

        const newPost = { name, userEmail, postDate, description, img, info, category, cost, location, rating, status };


        fetch('http://localhost:5000/blogposts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPost)
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



                    <input type="text" ref={infoRef} placeholder="Short Info" required />
                    <input type="text" ref={categoryRef} placeholder="Category" required />
                    <input type="number" ref={costRef} placeholder="Cost" required />
                    <input type="text" ref={locationRef} placeholder="Location" required />
                    <input type="number" ref={ratingRef} placeholder="Rating for this" required />

                    <textarea name="message" className="" ref={descriptionRef} placeholder="Content Description" required></textarea>


                    <br /><button className="btn btn-danger" type="submit">Create</button>
                </form>
            </div>

        </div>
    );
};

export default AddPost;