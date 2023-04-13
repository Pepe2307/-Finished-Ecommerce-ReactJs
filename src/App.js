import './App.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import React, { useState }  from 'react';

import Cart from './components/Cart/Cart'
import { CartContextProvider } from './context/CartContext'
import Continent_List from './components/Continents/Continent_List/Continent_List';
import Form from './components/Form/Form'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Header/headerResonsive';
import { NotificationProvider } from './notification/Notification'
import Presentacion from './components/Extras/Presentacion';
import Separador from './components/Extras/Separador';

function App() {

    const [cart , setCart] = useState([])
    console.log(cart)

    return (
        <NotificationProvider>
            <CartContextProvider>
                <BrowserRouter>
                    <div className="App">

                        <nav className="App-nav">
                            <Navbar/>
                            <Presentacion/>
                            <Continent_List/>
                            <Separador/>
                        </nav>

                        <div>
                            <Link to='/' className='boton_lista'>
                                ✨LISTA COMPLETA✨
                            </Link>

                            <Routes>
                                <Route path='/' element={<ItemListContainer greeting={<p>Bienvenido a los viajes</p>}/>} />
                                <Route path='/detalles' element={<ItemDetailContainer setCart={setCart}/>}> </Route>
                                <Route path='/detalles/:productId' element={<ItemDetailContainer setCart={setCart}/>}> </Route>
                                <Route path='/category/:categoryId' element={<ItemListContainer/>}> </Route>
                                <Route path='*' element={<h1>NOT FOUND 404</h1>}/>                        
                                <Route path='/form' element={<Form />}/>
                                <Route path='/cart' element={<Cart />} />
                            </Routes>
                        </div>
                        
                    </div>
                </BrowserRouter>
        </CartContextProvider>
    </NotificationProvider>
  );
}

export default App;