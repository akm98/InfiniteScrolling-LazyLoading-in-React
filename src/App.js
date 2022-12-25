import "./App.css";
import Pokemons from "./Components/Pokemons";

function App() {
	return (
		<div className='flex flex-col items-center h-full min-h-screen capitalize bg-emerald-300'>
			<p className='py-4'>PokeDex by Akash Mishra</p>
			<Pokemons />
		</div>
	);
}

export default App;
