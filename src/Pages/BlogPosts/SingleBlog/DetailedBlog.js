import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import SingleBlog from './SingleBlog';

const DetailedBlog = () => {
    const { blogId } = useParams();

    const [blog, setBlog] = useState({});
    const [changes, setChanges] = useState({});


    const history = useHistory();
    const handleReturn = () => {
        history.push('/home');
    }
    // console.log(blogId);

    useEffect(() => {
        fetch(`https://guarded-thicket-98440.herokuapp.com/blogs/${blogId}`)
            .then(res => res.json())
            .then(data => {
                setBlog(data);
                // console.log(data);

            })
    }, []);


    const handleAnyChange = (ch) => {
        setChanges(ch)
    }

    return (
        <div className='container m-5'>

            <SingleBlog handleAnyChange={handleAnyChange} blog={blog} own={'detailed'}></SingleBlog>
            <button style={{ backgroundColor: 'green', marginRight: '10px', color: 'white', padding: '5px', borderRadius: '5px' }} onClick={handleReturn}>Return</button>
        </div>
    );
};

export default DetailedBlog;