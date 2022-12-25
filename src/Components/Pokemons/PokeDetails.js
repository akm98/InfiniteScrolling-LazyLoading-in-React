import React from "react";

const PokeDetails = ({ pokemon }) => {
	return (
		<div
			className={`flex items-start justify-evenly w-full p-4 m-4 shadow-2xl rounded-xl bg-slate-50`}
		>
			<div className='p-4 border-2 shadow-md rounded-2xl bg-slate-200'>
				<p className='text-2xl font-bold text-center'>{pokemon.name}</p>
				<img
					className='max-h-36 max-w-36'
					src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
					width='150px'
					height='150px'
				/>
			</div>
			<div>
				<p className='font-bold'>Stats</p>
				{pokemon.stats.map((e) => (
					<p>
						{e.stat.name} : {e.base_stat}
					</p>
				))}
			</div>
			<div>
				<p>Type: {pokemon.types.map((e) => e.type.name).join(", ")}</p>
				<p>Height: {pokemon.height} </p> <p>Weight: {pokemon.weight} </p>
			</div>
		</div>
	);
};

export default PokeDetails;
