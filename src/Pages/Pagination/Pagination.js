import React, { useEffect, useState } from 'react';
import PageCount from './PageCount';

const Pagination = () => {

    const [data, setData] = useState([]);
    const [perPage, setPerPage] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setPerPage(data.slice(0, 10));
            });
    }, []);

    const pageHandler = (pageNumber) => {

        setPerPage(data.slice((pageNumber - 1) * 10, pageNumber * 10))
        // console.log('clicked', pageNumber);
    }


    return (
        <div>
            <h6>data {data.length}</h6>
            <h6>PerPage: {perPage.length}</h6>

            {
                perPage.map(item => <p>id: {item.id}</p>)
            }

            <PageCount dataLength={data?.length} pageHandler={pageHandler}></PageCount>



        </div>
    );
};

export default Pagination;