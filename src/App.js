
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



function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>

          <Header></Header>

          <Switch>

            {/* <Route exact path="/">
              <AllBlogPosts></AllBlogPosts>
            </Route>
            <PrivateRoute path='/home'>
              <Home></Home>
            </PrivateRoute>

            <PrivateRoute path='/login'>
              <Login></Login>
            </PrivateRoute>


            <PrivateRoute path='/contact'>
              <Contact></Contact>
            </PrivateRoute> */}

            <Route exact path="/">
              <Login></Login>
            </Route>
            <PrivateRoute path='/home'>
              <Home></Home>
            </PrivateRoute>

            <Route path='/login'>
              <Login></Login>
            </Route>


            <Route path='/contact'>
              <Contact></Contact>
            </Route>

          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
