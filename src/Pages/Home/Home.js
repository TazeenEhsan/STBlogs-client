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
import PrivateRoute from '../Login/PrivateRoute';
import AboutMe from './AboutMe/AboutMe';
import Banner from '../Banner/Banner';


const Home = (props) => {

    let { path, url } = useRouteMatch();

    return (
        <div className="mt-5" style={{ backgroundColor: '#47597e' }}>
            <Banner></Banner>
            <hr style={{ borderTop: '3px solid black' }} />

            <div className="row p-2 ms-2" style={{ border: '' }}>
                <div className="col-lg-2" style={{ borderRight: '3px solid black', paddingTop: '30px' }}>
                    <Link style={{ textDecoration: 'none' }} to={`${url}/createpost`}><button style={{ border: '2px solid green', color: 'wheat', backgroundColor: '#3b4966', borderRadius: '3px', marginBottom: '15px', width: '123px' }} >Create Post</button></Link> <br />

                    <Link style={{ textDecoration: 'none' }} to={`${url}/allblogs`}><button style={{ border: '2px solid green', color: 'wheat', backgroundColor: '#3b4966', borderRadius: '3px', marginBottom: '15px', width: '123px' }} >All Blogs</button></Link><br />

                    <Link style={{ textDecoration: 'none' }} to={`${url}/myblogs`}><button style={{ border: '2px solid green', color: 'wheat', backgroundColor: '#3b4966', borderRadius: '3px', marginBottom: '15px', width: '123px' }} >My Blogs</button></Link><br />
                    <Link style={{ textDecoration: 'none' }} to={`${url}/aboutme`}><button style={{ border: '2px solid green', color: 'wheat', backgroundColor: '#3b4966', borderRadius: '3px', marginBottom: '15px', width: '123px' }} >About Me</button></Link><br />



                </div>
                <div className="col-lg-9" style={{ backgroundColor: '#3b4966', paddingBottom: '10px' }}>

                    <Switch>
                        <PrivateRoute exact path={path}>

                            <AllBlogPosts></AllBlogPosts>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/createpost`}>
                            <AddPost></AddPost>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/allblogs`}>
                            <AllBlogPosts></AllBlogPosts>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/myblogs`}>
                            <MyBlogs></MyBlogs>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/aboutme`}>
                            <AboutMe></AboutMe>
                        </PrivateRoute>

                    </Switch>
                </div>
            </div>


        </div>
    );
};

export default Home;