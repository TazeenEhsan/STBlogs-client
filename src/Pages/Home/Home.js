import React from 'react';
import AddPost from '../AddPost.js/AddPost';

import { Link } from 'react-router-dom';

import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import AllBlogPosts from '../BlogPosts/AllBlogPosts/AllBlogPosts';
import MyBlogs from '../BlogPosts/MyBlogs/MyBlogs';


const Home = (props) => {

    let { path, url } = useRouteMatch();

    return (
        <div className="mt-5 container">

            <div className="row">
                <div className="col-lg-4" style={{ border: '2px solid green' }}>
                    <Link style={{ textDecoration: 'none' }} to={`${url}/createpost`}><button style={{ border: '2px solid green', color: 'goldenrod', marginBottom: '15px' }} >Create Post</button></Link> <br />

                    <Link style={{ textDecoration: 'none' }} to={`${url}/allblogs`}><button style={{ border: '2px solid green', color: 'goldenrod', marginBottom: '15px' }} >All Blogs</button></Link><br />

                    <Link style={{ textDecoration: 'none' }} to={`${url}/myblogs`}><button style={{ border: '2px solid green', color: 'goldenrod', marginBottom: '15px' }} >My Blogs</button></Link><br />

                    <Link style={{ textDecoration: 'none' }} to={`${url}/addproduct`}><button style={{ border: '2px solid green', color: 'goldenrod', marginBottom: '15px' }}>Add Product</button></Link>

                </div>
                <div className="col-lg-8" style={{ border: '2px solid green' }}>

                    <Switch>
                        <Route exact path={path}>

                            <AllBlogPosts></AllBlogPosts>
                        </Route>
                        <Route path={`${path}/createpost`}>
                            <AddPost></AddPost>
                        </Route>
                        <Route path={`${path}/allblogs`}>
                            <AllBlogPosts></AllBlogPosts>
                        </Route>
                        <Route path={`${path}/myblogs`}>
                            <MyBlogs></MyBlogs>
                        </Route>

                    </Switch>
                </div>
            </div>


        </div>
    );
};

export default Home;