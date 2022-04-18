/*REACT*/
import React  from 'react';
/*CSS*/
import './App.css';

/*COMPONENTES*/
import world from './recursos/world.png'
/*NAVBAR*/
import Navbar from './components/Header/navBar';
/*HEADER 2*/
import Navbar2 from './components/Header/headerResonsive';
/*Carrito/Lista*/
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
/*Contador*/
import ItemCount from './components/ItemCount/ItemCount';
/*Detalles*/
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
/*REACT ROUTER*/
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
/*CONTINENTES*/
import Continent_List from './components/Continents/Continent_List/Continent_List';

function App() {
  return (
    /**********************    APP    ********************/
    <div className="App">
        <BrowserRouter>

        {/**********************    APP NAV    ********************/}
    	<nav className="App-nav">

            {/* HEADER */}
            <Navbar2/>


            {/* RUTAS QUE APARECEN EN SI SE PRESIONA X BOTON EN HEADER */}
            <Routes>
                {/* <Route path='/contador' element={<ItemCount/>}> </Route>
                <Route path='/navbar' element={<Navbar2/>}> </Route> */}
                <Route path='/duo' element={<> <ItemCount/> <Navbar2/></>}> </Route>
            </Routes>


            {/* Presentacion */}
			<a className="App-presentacion" href="#">
                <p>
                Bienvenido! Seleccione un destino:
                </p>
                Where to travel now...
			</a>
            <img src={world} className="App-logo" alt="logo" />

            
            {/* LISTA DE CATEGORIAS */}
            <Continent_List/>


            {/* Separador */}
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#1b1b1b" fill-opacity="1" d="M0,128L48,149.3C96,171,192,213,288,240C384,267,480,277,576,256C672,235,768,181,864,170.7C960,160,1056,192,1152,208C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>


      	</nav>


        {/**********************    GALERIA LUGARES   ********************/}
		<div>
            {/* <ItemListContainer/> */}


            <Link to='/'           className='imagen_logo'>LISTA</Link>
            <Link to='/detalles'   className='imagen_logo'>DETALLES</Link>

            <Routes>
                <Route path='/' element={<ItemListContainer/>}> </Route>
                <Route path='/detalles' element={<ItemDetailContainer/>}> </Route>
                <Route path='/detalles/:productId' element={<ItemDetailContainer/>}> </Route>
                <Route path='/cart' element={null}></Route>


                <Route path='/duo' element={<> <ItemListContainer/> <ItemDetailContainer/> </>}> </Route>
                
            </Routes>


            {/* <ItemDetailContainer/> */}


		</div>


        </BrowserRouter>
    </div>
  );
}

export default App;