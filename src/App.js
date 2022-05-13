/*REACT*/
import React, { useState }  from 'react';
/*CSS*/
import './App.css';


/*NAVBAR*/
import Navbar from './components/Header/headerResonsive';
/*CONTINENTES*/
import Continent_List from './components/Continents/Continent_List/Continent_List';
/*EXTRAS*/
import Presentacion from './components/Extras/Presentacion';
import Separador from './components/Extras/Separador';
/*ITEM LIST*/
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
/*ITEM DETAIL*/
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
/*REACT ROUTER*/
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

//AGREGAR FORM Y CART

/* import Index from './components/Index/Index'
import Form from './components/Form/Form'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound'
import { CartContextProvider } from './context/CartContext'
import { NotificationProvider } from './notification/Notification' */



function App() {

    const [cart , setCart] = useState([])
    console.log(cart)

    return (
        /* <NotificationProvider>
            <CartContextProvider> */
                <BrowserRouter>
                    {/* /**********************    APP    ********************/}
                    <div className="App">
                        

                        {/**********************    PRESENTACION    ********************/}
                        <nav className="App-nav">
                            <Navbar/>
                            <Presentacion/>
                            <Continent_List/>
                            <Separador/>
                        </nav>
                        {/**********************    GALERIA    ********************/}
                        <div>

                            <Link to='/'           className='imagen_logo'>LISTA</Link>
                            <Link to='/detalles'   className='imagen_logo'>DETALLES</Link>

                            <Routes>

                                <Route path='/' element={<ItemListContainer/>}> </Route>
                                <Route path='/detalles' element={<ItemDetailContainer setCart={setCart}/>}> </Route>
                                <Route path='/detalles/:productId' element={<ItemDetailContainer setCart={setCart}/>}> </Route>
                                <Route path='/detalles/:categoryId' element={<ItemListContainer/>}> </Route>
                                <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
                                <Route path='/cart' element={null}></Route>


                                {/* <Route path='/' element={<ItemListContainer/>}> </Route>
                                <Route path='/detalles' element={<ItemDetailContainer setCart={setCart}/>}> </Route>
                                <Route path='/detalles/:productId' element={<ItemDetailContainer setCart={setCart}/>}> </Route>
                                
                                <Route path='/detalles/:categoryId' element={<ItemListContainer/>}> </Route>

                                <Route path='/cart' element={null}></Route> */}

                                {/* <Route path='/categoria/norteamerica' element={<ItemListContainer/>}> </Route>
                                <Route path='/categoria/europa' element={<ItemListContainer/>}> </Route>
                                <Route path='/categoria/sudamerica' element={<ItemListContainer/>}> </Route>
                                <Route path='/categoria/asia' element={<ItemListContainer/>}> </Route> */}
                            </Routes>

                        </div>


                        
                    </div>
                </BrowserRouter>
        /* </CartContextProvider>
    </NotificationProvider> */
  );
}

export default App;