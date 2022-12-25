import React from "react";

const PokeCard = (props) => {
	return (
		<>
			<div className='flex flex-col items-center w-32 h-32 p-4 m-4 shadow-2xl cursor-pointer rounded-xl bg-slate-50 hover:bg-blue-700 hover:text-white'>
				<p>{props.name}</p>

				<img
					src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${props.id}.svg`}
					className='max-h-16 max-w-16'
				/>
			</div>
		</>
	);
};

export default PokeCard;
