import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {fetchPokemon, updateMyPokemon} from '../actions'
import CardBlock from '../components/CardBlock'
import './App.css'
import AddPokemonModal from './AddPokemonModal'

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}

class App extends Component {
	state = {
		showModal: false
	}

  handleOpenModal = () => {
    this.setState({ showModal: true })
  }
  
  handleCloseModal = () => {
    this.setState({ showModal: false })
	}

	handleRemoveMyPokemon = (pokemonToRemove) =>{
		const myPokemon = this.props.pokemon.myPokemon.filter((pokemon) => {
			return pokemon.id != pokemonToRemove.id
		})
		this.props.updateMyPokemon(myPokemon)
	}
	
	renderCardBlocks = (myPokemon) => {
		if (!myPokemon) return null
		
		const myPokemonBlocks = myPokemon.map((pokemon) => {
			return <CardBlock
				showHalf
				pokemon={pokemon}
				buttonText='x'
				buttonHandler={() => {this.handleRemoveMyPokemon(pokemon)}}/>
		})
	
		return myPokemonBlocks
	}

  render() {
    return (
      <div className="App">
				<div className="header">
					My Pokedex
				</div>

				<div className="body">
					{this.renderCardBlocks(this.props.pokemon.myPokemon)}
				</div>

				<div className="footer">
					<div
						className="add-button"
						onClick={this.handleOpenModal}
					>
						+
					</div>
				</div>

				<AddPokemonModal
					isOpen={this.state.showModal}
					onRequestClose={this.handleCloseModal}
				/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPokemon, updateMyPokemon }, dispatch)
}

const mapStateToProps = ({ pokemon }) => {
  return { pokemon }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)