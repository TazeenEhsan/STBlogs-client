
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Contact from './Pages/Home/Contact/Contact';
import Footer from './Pages/Home/Footer/Footer';
import Header from './Pages/Home/Header/Header';

import AuthProvider from './context/AuthProvider';
import Login from './Pages/Login/Login';



function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>

          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>

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
