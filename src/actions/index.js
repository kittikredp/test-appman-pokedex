import axios from "axios"

// const ROOT_URL = `http://localhost:3030/api/cards?limit=30&name=picha&type=normal`
const ROOT_URL = `http://localhost:3030/api/cards`

export const FETCH_POKEMON = "FETCH_POKEMON"

export function fetchPokemon(name) {
  const url = `${ROOT_URL}?name=${name}`
  const request = axios.get(url)

  return {
    type: FETCH_POKEMON,
    payload: request
  }
}
