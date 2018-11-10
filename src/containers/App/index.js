import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {fetchPokemon, updateMyPokemon} from '../../actions'
import CardBlock from '../../components/CardBlock'
import './index.scss'
import AddPokemonModal from '../AddPokemonModal'

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
		
		const myPokemonBlocks = myPokemon.map((pokemon, i) => {
			return <CardBlock
				showHalf
				pokemon={pokemon}
				buttonText='x'
				buttonHandler={() => {this.handleRemoveMyPokemon(pokemon)}}
				key={i}
				/>
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