// import PropTypes from 'prop-types'
import React from 'react'
import PowerBar from '../PowerBar'
import happinessImg from '../../images/cute.png'

import './index.css'	

export const CardBlock = (props) => {
  
  let {pokemon, remove} = props
	
	pokemon = !pokemon.attacks ? {attacks: [], ...pokemon}:pokemon
	pokemon = !pokemon.weaknesses ? {weaknesses: [], ...pokemon}:pokemon

	const getSmile = () => {
		<img src="../images/cute.png"></img>
	}

	const getDamage = (damage) => {
		console.log('damage', damage)
		// const isSymbolDamage = isNaN(damage.slice(-1))
		// if (damage.length == 0 || !isSymbolDamage) return 0

		// return parseInt(damage.slice(0, -1))

		
		if (damage.length == 0) return 0

		return isNaN(damage.slice(-1)) ? parseInt(damage.slice(0, -1)):parseInt(damage)
	}

	const renderHappiness = (level) => {
		let happinessLevel = []
		for (let i = 0; i < level; i++) {
			happinessLevel.push(<img src={happinessImg}></img>)
		}
		return happinessLevel
	}
	console.log('----------'+pokemon.name)
	const hpPower = isNaN(pokemon.hp) ? 0:parseInt(pokemon.hp) > 100 ? 100:pokemon.hp
	console.log('hpPower', hpPower)
	const strPower = pokemon.attacks.length * 50 > 100 ? 100:pokemon.attacks.length * 50
	const weakPower = pokemon.weaknesses.length >= 1 ? 100:0
	console.log('pokemon.weaknesses.length', pokemon.weaknesses.length)
	console.log('cal dmg start')
	const damagePower = pokemon.attacks.reduce((sumAtk, atk) => sumAtk + getDamage(atk.damage), 0)
	console.log('damagePower', damagePower)

	const happinessLevel = Math.ceil(((hpPower / 10) + (damagePower /10 ) + 10 - (pokemon.weaknesses.length)) / 5)
	console.log('happinessLevel', happinessLevel)
  return (
    <div className="card-block">
			<img className="card-img" src={pokemon.imageUrl} />
			<div className="detail">
				<div className="name">
					{pokemon.name}
				</div>
				<PowerBar
					title={'HP'}
					power={hpPower}
				/>
				<PowerBar
					title={'STR'}
					power={strPower}
				/>
				<PowerBar
					title={'WEAK'}
					power={weakPower}
				/>
				<div className="happiness">
					{renderHappiness(happinessLevel)}
				</div>
			</div>
		</div>
  )
}

// CardBlock.propTypes = {
//   remove: PropTypes.func,
//   pokemon:PropTypes.object,
// }

export default CardBlock
