import React, { useEffect, useState } from 'react';
import useFirebase from '../../../hooks/useFirebase';
import SingleBlog from '../SingleBlog/SingleBlog';

const MyBlogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [changes, setChanges] = useState('no');

    const { user } = useFirebase();

    useEffect(() => {
        fetch('https://guarded-thicket-98440.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [changes]);

    const handleAnyChange = (ch) => {
        setChanges(ch)
    }


    const filtered = blogs.filter(blog => blog.userEmail === user.email);

    return (
        <div>
            <h1 style={{ color: '#32d7d1' }}>My Blogs </h1>

            {
                filtered.map(blog => <SingleBlog handleAnyChange={handleAnyChange} blog={blog} own={'true'}></SingleBlog>)
            }


        </div>
    );
};

export default MyBlogs;