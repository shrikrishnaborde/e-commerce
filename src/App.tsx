import './App.css';
import {lazy,Suspense} from 'react';
import {Routes, Route,Link} from 'react-router-dom';
import Header from './component/Header'
import Cart from './Pages/Cart';
import styled from 'styled-components';
const Home = lazy(()=>import('./Pages/Home'));


const ProductItemConatiner = styled.div`
  padding-top:100px;
;`

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductItemConatiner>
        <Routes>
          <Route path="/"  element={
          <Suspense fallback={<FallbackUI/>}>
            < Home/>
          </Suspense>
        } />
        <Route path="/cart" element={< Cart/>} />
        </Routes>
      </ProductItemConatiner>
    </div>
  );
}

export default App;


const FallbackUI =() =>{
  return (
    <p> Loading please wait...</p>
  )
}