import React from 'react';
import { Link } from 'react-router-dom';

import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import AddPost from '../AddPost.js/AddPost';
import MyBlogs from '../BlogPosts/MyBlogs/MyBlogs';
import AboutMe from '../Home/AboutMe/AboutMe';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageAllPosts from './ManageAllPosts/ManageAllPosts';


const AdminPannel = () => {


    let { path, url } = useRouteMatch();

    const { admin, logOut } = useAuth();



    return (
        <div className="mt-5 container">

            <div className="row">
                <div className="col-lg-4" style={{ border: '2px solid green', paddingTop: '30px' }}>
                    <br />
                    <Link style={{ textDecoration: 'none' }} to={`${url}/makeadmin`}><button style={{ border: '2px solid green', color: 'gold', backgroundColor: '#419041', borderRadius: '3px', marginBottom: '15px' }} >Make Admin </button></Link> <br />
                    <Link style={{ textDecoration: 'none' }} to={`${url}/manageblogs`}><button style={{ border: '2px solid green', color: 'gold', backgroundColor: '#419041', borderRadius: '3px', marginBottom: '15px' }} >Manage Blogs</button></Link><br />

                    <Link style={{ textDecoration: 'none' }} to={`${url}/myblogs`}><button style={{ border: '2px solid green', color: 'gold', backgroundColor: '#419041', borderRadius: '3px', marginBottom: '15px' }} >My Blogs</button></Link><br />
                    <Link style={{ textDecoration: 'none' }} to={`${url}/createpost`}><button style={{ border: '2px solid green', color: 'gold', backgroundColor: '#419041', borderRadius: '3px', marginBottom: '15px' }} >Create Blog Post </button></Link> <br />
                    <Link style={{ textDecoration: 'none' }} to={`${url}/aboutme`}><button style={{ border: '2px solid green', color: 'gold', backgroundColor: '#419041', borderRadius: '3px', marginBottom: '15px' }} >About Me</button></Link><br />



                </div>
                <div className="col-lg-8" style={{ border: '2px solid green' }}>

                    <Switch>
                        <Route exact path={path}>
                            <AboutMe></AboutMe>
                        </Route>
                        <Route path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/manageblogs`}>
                            <ManageAllPosts></ManageAllPosts>
                        </Route>
                        <Route path={`${path}/myblogs`}>
                            <MyBlogs></MyBlogs>
                        </Route>
                        <Route path={`${path}/createpost`}>
                            <AddPost></AddPost>
                        </Route>
                        <Route path={`${path}/aboutme`}>
                            <AboutMe></AboutMe>
                        </Route>


                    </Switch>
                </div>
            </div>


        </div>
    );
};

export default AdminPannel;