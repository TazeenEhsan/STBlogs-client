import React, { useEffect, useState } from 'react';
import PageCount from '../../Pagination/PageCount';
import SingleBlog from '../SingleBlog/SingleBlog';

const AllBlogPosts = () => {

    const [data, setData] = useState([]);
    const [perPage, setPerPage] = useState([]);

    const [changes, setChanges] = useState({});


    useEffect(() => {
        fetch('https://guarded-thicket-98440.herokuapp.com/user/blogs')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setPerPage(data.slice(0, 10));
            })

    }, [changes]);
    const handleAnyChange = (ch) => {
        setChanges(ch)
    }


    const pageHandler = (pageNumber) => {

        setPerPage(data.slice((pageNumber - 1) * 10, pageNumber * 10))
        console.log('clicked', pageNumber);
    }


    return (
        <div>
            <h1>All Blogs {data.length}</h1>
            {
                perPage.map(blog => <SingleBlog handleAnyChange={handleAnyChange} blog={blog} own={''}></SingleBlog>)
            }
            <PageCount dataLength={data?.length} pageHandler={pageHandler}></PageCount>
        </div>
    );
};

export default AllBlogPosts;