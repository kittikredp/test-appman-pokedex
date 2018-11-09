import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Modal from 'react-modal'
import _ from 'lodash'
import {updateMyPokemon} from '../../actions'
import CardBlock from '../../components/CardBlock'

class AddPokemonModal extends Component {
  render() {
		const {isOpen, onRequestClose} = this.props
		const {pokemonList, myPokemon} = this.props.pokemon

		const customStyles = {
			content : {
				top: '10%',
				left: '10%',
				marginRight: '10%',
			}
		}

		const addMyPokemon = (pokemon) => {
			const pokemonToUpdate = [...myPokemon, pokemon]
			this.props.updateMyPokemon(pokemonToUpdate)
		}
		
		const renderCardBlocks = () => {
			const pokemonToSearch = _.differenceBy(pokemonList, myPokemon, 'id');
			
			if (!pokemonToSearch) return null
			
			const myPokemonBlocks = pokemonToSearch.map((pokemon) => {
				return <CardBlock
				pokemon={pokemon}
				buttonText='Add'
				buttonHandler={() => addMyPokemon(pokemon)}/>
			})
		
			return myPokemonBlocks
		}
	
    return (
			<Modal
				isOpen={isOpen}
				onRequestClose={onRequestClose}
				shouldCloseOnOverlayClick={true}
				style={customStyles}
			>
				{renderCardBlocks()}
			</Modal>
  	)
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateMyPokemon }, dispatch)
}

const mapStateToProps = ({ pokemon }) => {
  return { pokemon }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPokemonModal)