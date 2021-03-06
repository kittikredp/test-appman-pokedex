import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Modal from 'react-modal'
import _ from 'lodash'
import {fetchPokemon, updateMyPokemon, clearPokemonList} from '../../actions'
import CardBlock from '../../components/CardBlock'
import './index.scss'

const initState = {
	name: '',
	type: '',
	limit: 20
}

class AddPokemonModal extends Component {
	state = initState
	
	componentWillReceiveProps(nextProps) {
		if (this.props.isOpen != nextProps.isOpen) {
			if(nextProps.isOpen) {
				this.setState(initState, () => {
					this.props.fetchPokemon()
				})
			} else {
				this.props.clearPokemonList()
			}
		}
	}
	
	deboundSearch = _.debounce(() => {
		this.props.fetchPokemon(this.state) 
	}, 500)

  handleChangeName = e => {
		this.setState({
			name: e.target.value,
			limit: 20
		},() => { 
			this.deboundSearch()
		})
	}

	handleChangeType = e => {
		this.setState({
			type: e.target.value,
			limit: 20
		}, () =>{
			this.props.fetchPokemon(this.state)
		})
	}
	
  handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight
    if (bottom) {
			const newLimit = this.state.limit + 20
			this.setState({limit: newLimit}, () =>{
				this.props.fetchPokemon(this.state)
			})
		 }
	}
	
  render() {
		const {isOpen, onRequestClose} = this.props
		const {pokemonList, myPokemon} = this.props.pokemon

		const addMyPokemon = (pokemon) => {
			const pokemonToUpdate = [...myPokemon, pokemon]
			this.props.updateMyPokemon(pokemonToUpdate)
		}
		
		const renderCardBlocks = () => {
			const pokemonToSearch = _.differenceBy(pokemonList, myPokemon, 'id');
			
			if (!pokemonToSearch) return null
			
			const myPokemonBlocks = pokemonToSearch.map((pokemon, i) => {
				return <CardBlock
					pokemon={pokemon}
					buttonText='Add'
					buttonHandler={() => addMyPokemon(pokemon)}
					key={i}
					/>
			})
		
			return myPokemonBlocks
		}
	
    return (
			<Modal
				isOpen={isOpen}
				onRequestClose={onRequestClose}
				shouldCloseOnOverlayClick={true}
				className="Modal"
				overlayClassName="Overlay"
			>
				<div className="pokemon-list">
					<div className="search-bar">
						<input
							className="name-search"
							type="text"
							placeholder="Find pokemon"
							onChange={this.handleChangeName}
						/>
						<select className="type-search" onChange={this.handleChangeType}>
							<option value=""></option>
							<option value="Grass">Grass</option>
							<option value="Fire">Fire</option>
							<option value="Water">Water</option>
							<option value="Lightning">Lightning</option>
							<option value="Fighting">Fighting</option>
							<option value="Psychic">Psychic</option>
							<option value="Colorless">Colorless</option>
							<option value="Darkness">Darkness</option>
							<option value="Metal">Metal</option>
							<option value="Dragon">Dragon</option>
							<option value="Fairy">Fairy</option>
						</select>
					</div>
					<div className="cardBlocks-container" onScroll={this.handleScroll}>
						{ renderCardBlocks() }
					</div>
				</div>
			</Modal>
  	)
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPokemon, updateMyPokemon, clearPokemonList }, dispatch)
}

const mapStateToProps = ({ pokemon }) => {
  return { pokemon }
}

Modal.setAppElement('body')

export default connect(mapStateToProps, mapDispatchToProps)(AddPokemonModal)