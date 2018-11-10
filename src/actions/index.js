import axios from "axios"

const ROOT_URL = `http://localhost:3030/api/cards`

export const FETCH_POKEMON = "FETCH_POKEMON"
export const CLEAR_POKEMON = "CLEAR_POKEMON"
export const UPDATE_MY_POKEMON = "UPDATE_MY_POKEMON"

const getQueryString = (params) => {
	let queryArr = []
	Object.keys(params).map(key => {
		if (params[key].length != 0) {
			queryArr.push(`${key}=${params[key]}`)
		}
	})

	return queryArr.length != 0 ? `?${queryArr.join('&')}`:''
}

export function fetchPokemon(params = {}) {
	const queryString = getQueryString(params)
  const url = `${ROOT_URL}${queryString}`
	const request = axios.get(url)
	
  return {
    type: FETCH_POKEMON,
    payload: request
  }
}

export function clearPokemonList() {
  return {
    type: CLEAR_POKEMON
  }
}

export function updateMyPokemon(pokemon){
	return {
		type: UPDATE_MY_POKEMON,
		payload: pokemon
	}
}