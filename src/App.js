import React, { useState }  from 'react';
import './App.css';
import Navbar from './components/Header/headerResonsive';
import Continent_List from './components/Continents/Continent_List/Continent_List';
import Presentacion from './components/Extras/Presentacion';
import Separador from './components/Extras/Separador';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Form from './components/Form/Form'
import Cart from './components/Cart/Cart'
import { NotificationProvider } from './notification/Notification'
import { CartContextProvider } from './context/CartContext'

//AGREGAR FORM Y CART

/* import Index from './components/Index/Index' 
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound'*/


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
                            <Link to='/' className='imagen_logo'>LISTA COMPLETA</Link>

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