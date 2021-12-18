import React from 'react';
import { useHistory } from 'react-router-dom';


const SingleBlog = (props) => {

    const { blog, own } = props;
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

                        alert('delete success');
                        history.push('/home');
                    }
                });
        }

    }
    console.log(props);
    return (
        <div>
            <div className="row" style={{ border: '2px solid goldenrod', marginBottom: '5px' }}>
                <div className="col-lg-5" style={{ border: '2px solid green' }}>
                    <img style={{ textAlign: 'start', width: '270px', height: '240px', border: '2px solid red' }} src={blog.img} alt="no image" />

                </div>
                <div className="col-lg-7" style={{ textAlign: 'start', border: '2px solid black' }}>

                    <h6>Title: {blog.name}</h6>
                    <small style={{ fontSize: '13px' }}>Date{ }</small>
                    <p>jjj:{blog.description}</p>
                    {
                        (own === 'true') ? <button style={{ backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px' }} onClick={() => handleDelete(blog._id)}>Delete</button> : <p>no</p>
                    }
                </div>
            </div>

        </div>
    );
};

export default SingleBlog;