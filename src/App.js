import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import CartWidget from "./Components/CartWidget";
import Iphone from './Components/Iphone';
import Ipad from './Components/Ipad';
import Mac from './Components/Mac';
import Watch from './Components/Watch';
import News from './Components/News';
import './App.css';
import Card from "./Components/Card";
import ItemDetail from "./Components/ItemDetail";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>

            <Route path = "/" element= {<ItemListContainer/>}/>

            <Route path = "/Iphone" element = {<Iphone/>}/>
            <Route path = "/Ipad" element = {<Ipad/>}/>
            <Route path = "/Mac" element = {<Mac/>}/>
            <Route path = "/Watch" element = {<Watch/>}/>
            <Route path = "/News" element = {<News/>}/>
            <Route path = "/ItemDetail/:detalle" element = {<ItemDetail/>}/>

            <Route path = "/CartWidget" element = {<CartWidget/>}/>

        </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
