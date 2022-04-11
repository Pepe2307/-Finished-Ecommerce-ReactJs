/*REACT*/
import React  from 'react';
/*CSS*/
import './App.css';

/*COMPONENTES*/
import logo from './logo.svg';
import imagen from './recursos/montana.jpg'
import world from './recursos/world.png'

/*NAVBAR*/
import Navbar from './components/Header/navBar';
/*HEADER 2*/
import Navbar2 from './components/Header/headerResonsive';
/*Galeria*/
import GaleriaSlider from './components/Slider/galeriaSlider';
/*Carrito/Lista*/
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
/*Contador*/
import ItemCount from './components/ItemCount/ItemCount';
/*Cards*/
import Card from './components/Cards/Card';

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    /**********************    APP    ********************/
    <div className="App">
        
        {/**********************    HEADER    ********************/}
        <Navbar2/>
        
        <GaleriaSlider/>
        

        {/**********************    APP 1    ********************/}
    	<header className="App-nav">
            {/* HEADER VIEJOS */}
            <Navbar/>

            {/* Img girando */}
			<img src={world} className="App-logo" alt="logo" />


			<a className="App-link" href="https://reactjs.org" target="_blank"
			rel="noopener noreferrer">
                <p>
                Bienvenido! Seleccione un destino:
                </p>
                Where to travel now...
			</a>

            <ItemCount/>
            
            {/* Separador */}
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#1b1b1b" fill-opacity="1" d="M0,128L48,149.3C96,171,192,213,288,240C384,267,480,277,576,256C672,235,768,181,864,170.7C960,160,1056,192,1152,208C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>

      	</header>


        {/**********************    APP 2    ********************/}
		<nav className="App-second-part">
            <ItemListContainer props="(Prop user - texto cambiante)"/>

            <ItemDetailContainer/>
		</nav>
    </div>
  );
}

export default App;