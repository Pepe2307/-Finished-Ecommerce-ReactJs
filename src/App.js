/*REACT*/
import React, { useState }  from 'react';
/*CSS*/
import './App.css';


/*NAVBAR*/
import Navbar from './components/Header/headerResonsive';
/*ITEM LIST*/
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
/*Contador*/
import ItemCount from './components/ItemCount/ItemCount';
/*ITEM DETAIL*/
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
/*REACT ROUTER*/
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
/*CONTINENTES*/
import Continent_List from './components/Continents/Continent_List/Continent_List';

/*EXTRAS*/
import Presentacion from './components/Extras/Presentacion';
import Separador from './components/Extras/Separador';

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

                    {/**********************    APP    ********************/}
                    <div className="App">
                        
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
                                <Route path='/detalles/:categoryId' element={<ItemListContainer/>}> </Route>

                                <Route path='/detalles' element={<ItemDetailContainer setCart={setCart}/>}> </Route>
                                <Route path='/detalles/:productId' element={<ItemDetailContainer setCart={setCart}/>}> </Route>
                                
                                {/* <Route path='*' element={<NotFound />}/>
                                <Route path='/form' element={<Form />}/>
                                <Route path='/cart' element={<Cart />} /> */}

                            </Routes>

                        </div>


                        
                    </div>
                </BrowserRouter>
            /* </CartContextProvider>
        </NotificationProvider> */
  );
}

export default App;