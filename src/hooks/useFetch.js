import { useState, useEffect, useCallback } from "react";

function useFetch(limit, offset) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [pokeData, setPokedata] = useState([]);

	const sendQuery = useCallback(async () => {
		try {
			setLoading(true);
			setError(false);
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
			);
			const data = await response.json();
			const getPokemonDetails = (pokemons = []) => {
				pokemons.forEach(async (pokemon) => {
					const response = await fetch(pokemon.url);
					const data = await response.json();
					setPokedata((prev) => [...prev, data]);
				});
			};
			getPokemonDetails(data.results);

			setLoading(false);
		} catch (err) {
			setError(err);
		}
	}, [limit, offset]);

	useEffect(() => {
		sendQuery(limit);
	}, [limit, sendQuery, offset]);

	return { loading, error, pokeData };
}

export default useFetch;
