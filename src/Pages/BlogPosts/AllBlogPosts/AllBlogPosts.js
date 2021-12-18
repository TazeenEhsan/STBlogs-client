import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const AllBlogPosts = () => {

    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        fetch('https://guarded-thicket-98440.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, []);

    return (
        <div>
            <h1>All Blog Posts{blogs.length}</h1>
            {
                blogs.map(blog => <SingleBlog blog={blog} own={''}></SingleBlog>)
            }
        </div>
    );
};

export default AllBlogPosts;