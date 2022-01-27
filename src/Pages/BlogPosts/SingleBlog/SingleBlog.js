import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Alert } from 'bootstrap';

const SingleBlog = (props) => {
    const [success, setSuccess] = useState(false);

    const { blog, own, handleAnyChange } = props;
    const history = useHistory();

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://guarded-thicket-98440.herokuapp.com/blogs/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setSuccess(true);
                        handleAnyChange('yes');
                        alert('delete success');
                        history.push('/home');
                    }
                });
        }

    }
    const handleUpdateStatus = (id) => {
        const proceed = window.confirm('Are you sure, you want to update?');
        if (proceed) {
            const url = `https://guarded-thicket-98440.herokuapp.com/blogs/${id}`;
            fetch(url, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        handleAnyChange('yes');
                        alert('delete success');
                        history.push('/adminpannel/manageblogs');
                    }
                }
                );
        }

    }

    const handleDetailed = (id) => {
        // console.log('detailde id', _id)
        history.push(`/detailedBlog/${id}`);
    }
    console.log(props);
    return (
        <div>
            <div className="row" style={{ paddingBottom: '5px', border: '2px solid black', marginBottom: '5px' }}>
                <div className="col-lg-5" style={{}}>
                    <img style={{ textAlign: 'start', width: '270px', height: '240px' }} src={blog.img} alt="no image" />

                </div>
                <div className="col-lg-7" style={{ textAlign: 'start' }}>

                    <h6>Title: {blog.name}</h6>
                    <small style={{ fontSize: '13px' }}>Posted:{blog?.postDate}</small>
                    <p>{blog.description}</p>

                    {

                        (own === 'detailed') ? <>
                            <p> category{blog?.category}</p>
                            <p>Short info-{blog?.info}</p>
                            <p>Location:{blog?.location}</p>
                            <p>Cost:{blog?.cost}</p>
                            <p>Rating:{blog?.rating}</p>
                        </> :
                            <></>
                    }

                    {
                        (own === 'admin') ? <p>Status: {blog?.status}</p> : <p></p>
                    }
                    {
                        (own === 'true') ? <p>Status: {blog?.status}</p> : <p></p>
                    }


                    {
                        (own !== 'detailed') && < button style={{ backgroundColor: 'green', marginRight: '10px', color: 'white', padding: '5px', borderRadius: '5px' }} onClick={() => handleDetailed(blog._id)}>Details</button>
                    }
                    {
                        (own === 'true') ? <button style={{ backgroundColor: 'red', color: 'white', padding: '5px', borderRadius: '5px' }} onClick={() => handleDelete(blog._id)}>Delete</button> : <p></p>
                    }
                    {
                        (own === 'admin') ? <button style={{ backgroundColor: 'red', color: 'white', padding: '5px', borderRadius: '5px' }} onClick={() => handleDelete(blog._id)}>Delete</button> : <p></p>
                    }
                    {
                        (own === 'admin') ? <button style={{ backgroundColor: 'blue', color: 'white', padding: '5px', borderRadius: '5px' }} onClick={() => handleUpdateStatus(blog._id)}>Status Update</button> : <p></p>
                    }


                    {success && <Alert severity="success">Status updated successfully!</Alert>}
                </div>
            </div>

        </div>
    );
};

export default SingleBlog;