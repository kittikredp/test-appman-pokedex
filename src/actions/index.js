import axios from "axios"

// const ROOT_URL = `http://localhost:3030/api/cards?limit=30&name=picha&type=normal`
const ROOT_URL = `http://localhost:3030/api/cards`

export const FETCH_POKEMON = "FETCH_POKEMON"
export const ADD_MY_POKEMON = "ADD_MY_POKEMON"

export function fetchPokemon(name, type) {
  const url = `${ROOT_URL}?name=${name}&type=${type}`
  const request = axios.get(url)

  return {
    type: FETCH_POKEMON,
    payload: request
  }
}

export function addMyPokemon(pokemon){
	return {
		type: ADD_MY_POKEMON,
		payload: pokemon
	}
}