import './App.css';
import {lazy,Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './component/Header'
import Cart from './Pages/Cart';
import styled from 'styled-components';
const Home = lazy(()=>import('./Pages/Home'));

//styles for Product Item and car Pages
const ProductItemConatiner = styled.div`
  padding-top:100px;
;`

function App() {
  return (
    <div className="App">
      {/* Header Page */}
      <Header/>
      
      {/* Styles Wrapper component for Main Pages */}
      <ProductItemConatiner>
        <Routes>
          <Route path="/"  element={
          <Suspense fallback={<FallbackUI/>}>
            {/* Products Page */}
            < Home/>
          </Suspense>
        } />

        {/* Carts Page */}
        <Route path="/cart" 
          element={< Cart/>} />
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