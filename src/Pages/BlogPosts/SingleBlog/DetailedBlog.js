import React from 'react';
import { useHistory, useParams } from 'react-router';

const DetailedBlog = () => {
    const { blogId } = useParams();

    const history = useHistory();
    const handleReturn = () => {
        history.push('/');
    }
    console.log(blogId);

    return (
        <div>
            <h6>{blogId}</h6>
        </div>
    );
};

export default DetailedBlog;