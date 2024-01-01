import logo from './logo.svg';
import './App.css';
import {lazy,Suspense} from 'react';
import {Routes, Route,Link} from 'react-router-dom';

// import Home from './Pages/Home';
import About from './Pages/Cart'
import Header from './Pages/Header';
// import Signup from './authentication/Signup';
// import Login from './authentication/Login';
import Cart from './Pages/Cart';
// import WishList from './WishList.js/WishList'

const Home = lazy(()=>import('./Pages/Home'));
// const Singnup = lazy(()=>import('./authentication/Signup'));
// const Login =  lazy(()=>import('./authentication/Login'));

function App() {
  return (
    <div className="App">
      <Header/>
       <Routes>
          <Route path="/"  element={
          <Suspense fallback={<FallbackUI/>}>
            < Home/>
          </Suspense>
        } />
        <Route path="/cart" element={< Cart/>} />
          {/* <Route path="/signup" element={
          <Suspense fallback={<FallbackUI/>}>
            < Singnup/>
          </Suspense>
        } />
          <Route path="/login" element= {
          <Suspense fallback={<FallbackUI/>}>
            < Login/>
          </Suspense>
        } />
          <Route path="/cart" element={< Cart/>} />
          <Route path="/wishlist" element={< WishList/>} /> */}
       </Routes>
    </div>
  );
}

export default App;




const FallbackUI =() =>{
  return (
    <p> Loading please wait...</p>
  )
}