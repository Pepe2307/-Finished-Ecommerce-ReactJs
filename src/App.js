/*REACT*/
import React  from 'react';

/*COMPONENTES*/
import logo from './logo.svg';
import imagen from './recursos/montana.jpg'

/*CSS*/
import './App.css';
/*NAVBAR*/
import Navbar from './components/NavBar/navBar';

function App() {
  return (
    <div className="App"> {/*APLICACION*/}
		
        <Navbar/>
        
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