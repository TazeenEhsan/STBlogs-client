import React from 'react';
import { useEffect, useState } from 'react';
import SingleBlog from '../../BlogPosts/SingleBlog/SingleBlog';
import PageCount from '../../Pagination/PageCount';

const ManageAllPosts = () => {

    const [data, setData] = useState([]);
    const [perPage, setPerPage] = useState([]);
    const [changes, setChanges] = useState('no');


    const handleAnyChange = (ch) => {
        setChanges(ch)
    }


    console.log(changes);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setPerPage(data.slice(0, 10));
            })

    }, [changes]);

    const pageHandler = (pageNumber) => {

        setPerPage(data.slice((pageNumber - 1) * 10, pageNumber * 10))
        console.log('clicked', pageNumber);
    }


    return (
        <div>
            <h1>All Blogs {data.length}</h1>
            {
                perPage.map(blog => <SingleBlog handleAnyChange={handleAnyChange} blog={blog} own={'admin'}></SingleBlog>)
            }
            <PageCount dataLength={data?.length} pageHandler={pageHandler}></PageCount>
        </div>
    );
};

export default ManageAllPosts;