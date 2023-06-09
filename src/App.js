
import './App.css';
import Products from './components/Products';
import NewProduct from './components/NewProduct';
import Home from './components/Home';
import {BrowserRouter,Link,Route,Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';

function App() {
  const [currentRoute,setCurrentRoute]= useState();
  useEffect( ()=>{
    const path=window.location.pathname.toLocaleLowerCase();
    setCurrentRoute(path.slice(1,path.length));
  },[]);
  return (
    <BrowserRouter>
    <nav className="m-1 p-1 border border-info">
      <ul className="nav nav-pills">
        <li>
          <Link OnClick={()=> setCurrentRoute("home")} 
          className={currentRoute=="home"? "btn btn-info ms-1":"btn btn-outline-info ms-1"} to={"/home"}>Home</Link>
        </li>
        <li>
          <Link OnClick={()=> setCurrentRoute("products")} 
           className={currentRoute=="products"? "btn btn-info ms-1":"btn btn-outline-info ms-1"} to={"/products"}>Products</Link>
        </li>
        <li>
          <Link OnClick={()=> setCurrentRoute("NewProducts")} 
           className={currentRoute =="newProducts"? "btn btn-info ms-1":"btn btn-outline-info ms-1"} to={"/newProduct"}>NewProduct</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Products" element={<Products/>}></Route>
      <Route path="/Home" element={<NewProduct/>}></Route>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
