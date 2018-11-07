// import PropTypes from 'prop-types'
import React from 'react'
import PowerBar from '../PowerBar'
import happinessImg from '../../images/cute.png'

import './index.css'	

const getDamage = (damage) => {
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

const renderButton = (text, handler) => {
	return <div
		onClick={handler}
	>
		{text}
	</div>
}

export const CardBlock = (props) => {
  
  let {pokemon, showHalf, remove, buttonText, buttonHandler} = props
	
	pokemon = !pokemon.attacks ? {attacks: [], ...pokemon}:pokemon
	pokemon = !pokemon.weaknesses ? {weaknesses: [], ...pokemon}:pokemon
	
	const hpPower = isNaN(pokemon.hp) ? 0:parseInt(pokemon.hp) > 100 ? 100:pokemon.hp
	const strPower = pokemon.attacks.length * 50 > 100 ? 100:pokemon.attacks.length * 50
	const weakPower = pokemon.weaknesses.length >= 1 ? 100:0
	const damagePower = pokemon.attacks.reduce((sumAtk, atk) => sumAtk + getDamage(atk.damage), 0)
	const happinessLevel = Math.ceil(((hpPower / 10) + (damagePower /10 ) + 10 - (pokemon.weaknesses.length)) / 5)
	const isHalf = showHalf ? ' half':''
	
	// console.log('----------'+pokemon.name)
	// console.log('hpPower', hpPower)
	// console.log('pokemon.weaknesses.length', pokemon.weaknesses.length)
	// console.log('cal dmg start')
	// console.log('damagePower', damagePower)
  return (
    <div className={`card-block${isHalf}`}>
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
			<div className="card-btn" onClick={buttonHandler}>
				{buttonText}
			</div>
		</div>
  )
}

// CardBlock.propTypes = {
//   remove: PropTypes.func,
//   pokemon:PropTypes.object,
// }

export default CardBlock
