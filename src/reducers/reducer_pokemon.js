import { FETCH_POKEMON, ADD_MY_POKEMON } from "../actions";

const initState = {
	pokemonList: [],
	myPokemon: []
}

export default function(state = initState, action) {
  switch (action.type) {
		case FETCH_POKEMON:
			return { 
				...state,
				pokemonList: action.payload.data.cards
			}
		case ADD_MY_POKEMON:
			return {
				...state,
				myPokemon: [...state.myPokemon, action.payload]
			}
  }
  return state;
}
