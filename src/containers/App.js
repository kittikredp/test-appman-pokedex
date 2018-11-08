import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {fetchPokemon} from '../actions'
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
	constructor () {
    super()
    this.state = {
      showModal: false
		}
    
    this.handleOpenModal = this.handleOpenModal.bind(this)
		this.handleCloseModal = this.handleCloseModal.bind(this)
		this.handleRemovePokemon = this.handleRemovePokemon.bind(this)
		
	}
	
	componentDidMount() {
		this.props.fetchPokemon('','')
	}
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
	}
	
	handleRemovePokemon () {
		console.log('remPoke')
	}
	
	renderCardBlocks = (myPokemon) => {
		if (!myPokemon) return null
		
		const myPokemonBlocks = myPokemon.map((pokemon) => {
			return <CardBlock
				showHalf
				pokemon={pokemon}
				buttonText='x'
				buttonHandler={() => {console.log('s')}}/>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPokemon }, dispatch)
}

function mapStateToProps({ pokemon }) {
  return { pokemon }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)