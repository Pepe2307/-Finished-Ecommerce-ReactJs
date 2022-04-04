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
            
      	</header>


        {/**********************    APP 2    ********************/}
		<nav className="App-second-part">

            


            {/* <div class="segment"></div>
            <svg class="divider" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 0 L50 100 L100 0 Z"></path>
            </svg> */}


			<div className="borde">
			{/* <img src={imagen}></img> */}
			Bienvenido a Invento Travels	
			</div>

			<a className="" href="" target="_blank"
			rel="noopener noreferrer">
			<p>
			Bienvenido! Seleccione un destino
			</p>
			
			Where to travel...
			</a>

            {/* GALERIA */}

            <ItemListContainer props="(Prop user - texto cambiante)"/>
		</nav>


        {/* <footer>
            <div id="divider"></div>
        </footer>
 */}
    </div>
  );
}

export default App;