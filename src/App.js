/*REACT*/
import React  from 'react';
/*CSS*/
import './App.css';

/*COMPONENTES*/
import logo from './logo.svg';
import imagen from './recursos/montana.jpg'


/*NAVBAR*/
import Navbar from './components/Header/navBar';
/*HEADER 2*/
import Navbar2 from './components/Header/headerResonsive';
/*Galeria*/
import GaleriaSlider from './components/Slider/galeriaSlider';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    /**********************    APP    ********************/
    <div className="App">
        
        {/**********************    HEADER    ********************/}
        <Navbar2/>
        
        <GaleriaSlider/>

        <ItemListContainer props="(Prop user - texto cambiante)"/>

        {/**********************    APP 1    ********************/}
    	<header className="App-nav">
            {/* HEADER */}
            <Navbar/>
			<img src={logo} className="App-logo" alt="logo" />

			<a className="App-link" href="https://reactjs.org" target="_blank"
			rel="noopener noreferrer">
			<p>
			Bienvenido! Seleccione un destino:
			</p>
			
			Where to travel now...
			</a>
            
      	</header>


		<nav className="App-navigation">

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

		</nav>


    </div>
  );
}

export default App;