
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Contact from './Pages/Home/Contact/Contact';
import Footer from './Pages/Home/Footer/Footer';
import Header from './Pages/Home/Header/Header';

import AuthProvider from './context/AuthProvider';
import Login from './Pages/Login/Login';
import AllBlogPosts from './Pages/BlogPosts/AllBlogPosts/AllBlogPosts';
import PrivateRoute from './Pages/Login/PrivateRoute';
import Pagination from './Pages/Pagination/Pagination';
import Register from './Pages/Login/Register';
import AdminPannel from './Pages/AdminPannel/AdminPannel';
import DetailedBlog from './Pages/BlogPosts/SingleBlog/DetailedBlog';
import AdminRoute from './Pages/Login/AdminRoute';



function App() {
  return (
    <div className="App" style={{ backgroundColor: '#47597E' }}>

      <AuthProvider>
        <BrowserRouter>

          <Header></Header>

          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path='/home'>
              <Home></Home>
            </PrivateRoute>

            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>

            <AdminRoute path='/adminpannel'>
              <AdminPannel></AdminPannel>
            </AdminRoute>

            <PrivateRoute path="/detailedBlog/:blogId">
              <DetailedBlog></DetailedBlog>
            </PrivateRoute>


            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/page'>
              <Pagination></Pagination>
            </Route>

          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
