import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
		
    	<header className="App-nav">

			<img src={logo} className="App-logo" alt="logo" />

			

			<a className="App-link" href="https://reactjs.org" target="_blank"
			rel="noopener noreferrer">
			<p>
			Bienvenido! Seleccione un destino:
			</p>
			
			Where to travel...
			</a>

      	</header>


		<nav className="App-navigation">

			<div className="borde">
			<img src="../recursos/montana.jpg"></img>
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
