import { FETCH_POKEMON, CLEAR_POKEMON, UPDATE_MY_POKEMON } from "../actions"

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
		case UPDATE_MY_POKEMON:
			return {
				...state,
				myPokemon: action.payload
			}
		case CLEAR_POKEMON:
			return {
				...state,
				pokemonList: []
			}
  }
  return state
}
