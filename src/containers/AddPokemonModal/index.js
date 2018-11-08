import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Modal from 'react-modal'
import {addMyPokemon} from '../../actions'
import CardBlock from '../../components/CardBlock'

class AddPokemonModal extends Component {
  render() {
		const {isOpen, onRequestClose} = this.props

		const customStyles = {
			content : {
				top: '10%',
				left: '10%',
				marginRight: '10%',
			}
		}
		
	 	const CardBlocks = this.props.pokemon.pokemonList.map((pokemon) => {
			return <CardBlock
				pokemon={pokemon}
				buttonText='Add'
				buttonHandler={() => this.props.addMyPokemon(pokemon)}
			/>
		})
	
    return (
			<Modal
				isOpen={isOpen}
				onRequestClose={onRequestClose}
				shouldCloseOnOverlayClick={true}
				style={customStyles}
			>
				{CardBlocks}
			</Modal>
  	)
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMyPokemon }, dispatch)
}

function mapStateToProps({ pokemon }) {
  return { pokemon }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPokemonModal)