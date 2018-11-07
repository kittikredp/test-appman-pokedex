import React from 'react'
import Modal from 'react-modal'
import CardBlock from '../../components/CardBlock'

export const AddPokemonModal = props => {
  const {isOpen, onRequestClose} = props

	const customStyles = {
		content : {
			top: '10%',
			left: '10%',
			marginRight: '10%',
		}
	}
	const pokemons = [
		{
			id: 'ex8-98',
			name: 'Deoxys ex',
			nationalPokedexNumber: 386,
			imageUrl: 'https://images.pokemontcg.io/ex8/98.png',
			imageUrlHiRes: 'https://images.pokemontcg.io/ex8/98_hires.png',
			supertype: 'Pokémon',
			subtype: 'EX',
			ability: {
				name: 'Form Change',
				text: 'Once during your turn (before your attack), you may search your deck for another Deoxys ex and switch it with Deoxys ex. (Any cards attached to Deoxys ex, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Deoxys ex on top of your deck. Shuffle your deck afterward. You can\'t use more than 1 Form Change Poké-Power each turn.',
				type: 'Poké-Power'
			},
			hp: '110',
			retreatCost: [
				'Colorless',
				'Colorless'
			],
			convertedRetreatCost: 2,
			number: '98',
			artist: 'Mitsuhiro Arita',
			rarity: 'Rare Holo EX',
			series: 'EX',
			set: 'Deoxys',
			setCode: 'ex8',
			text: [
				'When Pokémon-ex has been Knocked Out, your opponent takes 2 Prize cards.'
			],
			attacks: [
				{
					cost: [
						'Psychic',
						'Colorless',
						'Colorless'
					],
					name: 'Psychic Burst',
					text: 'You may discard 2 Energy attached to Deoxys ex. If you do, this attack does 50 damage plus 20 more damage for each Energy attached to the Defending Pokémon.',
					damage: '50+',
					convertedEnergyCost: 3
				}
			],
			weaknesses: [
				{
					type: 'Psychic',
					value: '×2'
				}
			],
			type: 'Psychic'
		},
		{
			id: 'dp6-90',
			name: 'Cubone',
			nationalPokedexNumber: 104,
			imageUrl: 'https://images.pokemontcg.io/dp6/90.png',
			imageUrlHiRes: 'https://images.pokemontcg.io/dp6/90_hires.png',
			supertype: 'Pokémon',
			subtype: 'Basic',
			hp: '60',
			retreatCost: [
				'Colorless'
			],
			convertedRetreatCost: 1,
			number: '90',
			artist: 'Kagemaru Himeno',
			rarity: 'Common',
			series: 'Diamond & Pearl',
			set: 'Legends Awakened',
			setCode: 'dp6',
			attacks: [
				{
					cost: [
						'Colorless'
					],
					name: 'Headbutt',
					text: '',
					damage: '10',
					convertedEnergyCost: 1
				},
				{
					cost: [
						'Fighting',
						'Colorless'
					],
					name: 'Bonemerang',
					text: 'Flip 2 coins. This attack does 20 damage times the number of heads.',
					damage: '20×',
					convertedEnergyCost: 2
				}
			],
			resistances: [
				{
					type: 'Lightning',
					value: '-20'
				}
			],
			weaknesses: [
				{
					type: 'Water',
					value: '+10'
				}
			],
			type: 'Fighting'
		},
		{
			id: 'xyp-XY05',
			name: 'Xerneas',
			nationalPokedexNumber: 716,
			imageUrl: 'https://images.pokemontcg.io/xyp/XY05.png',
			imageUrlHiRes: 'https://images.pokemontcg.io/xyp/XY05_hires.png',
			supertype: 'Pokémon',
			subtype: 'Basic',
			hp: '130',
			retreatCost: [
				'Colorless',
				'Colorless'
			],
			convertedRetreatCost: 2,
			number: 'XY05',
			artist: '5ban Graphics',
			rarity: 'Rare',
			series: 'XY',
			set: 'XY Black Star Promos',
			setCode: 'xyp',
			attacks: [
				{
					cost: [
						'Fairy'
					],
					name: 'Geomancy',
					text: 'Choose 2 of your Benched Pokémon. For each of those Pokémon, search your deck for a Fairy Energy card and attach it to that Pokémon. Shuffle your deck afterward.',
					damage: '',
					convertedEnergyCost: 1
				},
				{
					cost: [
						'Fairy',
						'Fairy',
						'Colorless'
					],
					name: 'Rainbow Spear',
					text: 'Discard an Energy attached to this Pokémon.',
					damage: '100',
					convertedEnergyCost: 3
				}
			],
			resistances: [
				{
					type: 'Darkness',
					value: '-20'
				}
			],
			weaknesses: [
				{
					type: 'Metal',
					value: '×2'
				}
			],
			type: 'Fairy'
		},
		{
			id: 'ex14-85',
			name: 'Windstorm',
			imageUrl: 'https://images.pokemontcg.io/ex14/85.png',
			imageUrlHiRes: 'https://images.pokemontcg.io/ex14/85_hires.png',
			supertype: 'Trainer',
			subtype: 'Item',
			hp: 'None',
			number: '85',
			artist: 'Ryo Ueda',
			rarity: 'Uncommon',
			series: 'EX',
			set: 'Crystal Guardians',
			setCode: 'ex14',
			text: [
				'Choose up to 2 in any combination of Pokémon Tool cards and Stadium cards in play (both yours and your opponent\'s) and discard them.'
			],
			type: 'Normal'
		},{
			id: 'dp6-107',
			name: 'Misdreavus',
			nationalPokedexNumber: 200,
			imageUrl: 'https://images.pokemontcg.io/dp6/107.png',
			imageUrlHiRes: 'https://images.pokemontcg.io/dp6/107_hires.png',
			supertype: 'Pokémon',
			subtype: 'Basic',
			hp: '60',
			retreatCost: [
				'Colorless'
			],
			convertedRetreatCost: 1,
			number: '107',
			artist: 'Sumiyoshi Kizuki',
			rarity: 'Common',
			series: 'Diamond & Pearl',
			set: 'Legends Awakened',
			setCode: 'dp6',
			attacks: [
				{
					cost: [
						'Free'
					],
					name: 'Show Off',
					text: 'Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.',
					damage: '',
					convertedEnergyCost: 0
				},
				{
					cost: [
						'Psychic'
					],
					name: 'Payback',
					text: 'If your opponent has only 1 Prize card left, this attack does 10 damage plus 20 more damage.',
					damage: '10+',
					convertedEnergyCost: 1
				}
			],
			resistances: [
				{
					type: 'Colorless',
					value: '-20'
				}
			],
			weaknesses: [
				{
					type: 'Darkness',
					value: '+10'
				}
			],
			type: 'Psychic'
		},{
			id: 'base5-61',
			name: 'Mankey',
			nationalPokedexNumber: 56,
			imageUrl: 'https://images.pokemontcg.io/base5/61.png',
			imageUrlHiRes: 'https://images.pokemontcg.io/base5/61_hires.png',
			supertype: 'Pokémon',
			subtype: 'Basic',
			hp: '40',
			convertedRetreatCost: 0,
			number: '61',
			artist: 'Sumiyoshi Kizuki',
			rarity: 'Common',
			series: 'Base',
			set: 'Team Rocket',
			setCode: 'base5',
			attacks: [
				{
					cost: [
						'Colorless'
					],
					name: 'Mischief',
					text: 'Shuffle your opponent\'s deck.',
					damage: '',
					convertedEnergyCost: 1
				},
				{
					cost: [
						'Fighting',
						'Colorless'
					],
					name: 'Anger',
					text: 'Flip a coin. If heads, this attack does 20 damage plus 20 more damage; if tails, this attack does 20 damage.',
					damage: '20+',
					convertedEnergyCost: 2
				}
			],
			weaknesses: [
				{
					type: 'Psychic',
					value: '×2'
				}
			],
			type: 'Fighting'
		},{
			id: 'ex8-100',
			name: 'Hariyama ex',
			nationalPokedexNumber: 297,
			imageUrl: 'https://images.pokemontcg.io/ex8/100.png',
			imageUrlHiRes: 'https://images.pokemontcg.io/ex8/100_hires.png',
			supertype: 'Pokémon',
			subtype: 'EX',
			evolvesFrom: 'Makuhita',
			ability: {
				name: 'Commanding Aura',
				text: 'As long as Hariyama ex is your Active Pokémon, your opponent can\'t play any Stadium cards from his or her hand.',
				type: 'Poké-Body'
			},
			hp: '110',
			retreatCost: [
				'Colorless',
				'Colorless'
			],
			convertedRetreatCost: 2,
			number: '100',
			artist: 'Ryo Ueda',
			rarity: 'Rare Holo EX',
			series: 'EX',
			set: 'Deoxys',
			setCode: 'ex8',
			text: [
				'When Pokémon-ex has been Knocked Out, your opponent takes 2 Prize cards.'
			],
			attacks: [
				{
					cost: [
						'Fighting',
						'Colorless'
					],
					name: 'Knock Off',
					text: 'Choose 1 card from your opponent\'s hand without looking and discard it.',
					damage: '40',
					convertedEnergyCost: 2
				},
				{
					cost: [
						'Fighting',
						'Fighting',
						'Colorless'
					],
					name: 'Pivot Throw',
					text: 'During your opponent\'s next turn, any damage done to Hariyama ex by attacks is increased by 10 (before applying Weakness and Resistance).',
					damage: '80',
					convertedEnergyCost: 3
				}
			],
			weaknesses: [
				{
					type: 'Psychic',
					value: '×2'
				}
			],
			type: 'Fighting'
		},{
			id: 'ex8-102',
			name: 'Rayquaza ex',
			nationalPokedexNumber: 384,
			imageUrl: 'https://images.pokemontcg.io/ex8/102.png',
			imageUrlHiRes: 'https://images.pokemontcg.io/ex8/102_hires.png',
			supertype: 'Pokémon',
			subtype: 'EX',
			ability: {
				name: 'Dragon Boost',
				text: 'Once during your turn, when you put Rayquaza ex from your hand onto your Bench, you may move any number of basic Energy cards attached to your Pokémon to Rayquaza ex.',
				type: 'Poké-Body'
			},
			hp: '100',
			retreatCost: [
				'Colorless',
				'Colorless'
			],
			convertedRetreatCost: 2,
			number: '102',
			artist: 'Shin-ichi Yoshikawa',
			rarity: 'Rare Holo EX',
			series: 'EX',
			set: 'Deoxys',
			setCode: 'ex8',
			text: [
				'When Pokémon-ex has been Knocked Out, your opponent takes 2 Prizes cards.'
			],
			attacks: [
				{
					cost: [
						'Fire',
						'Lightning'
					],
					name: 'Spiral Blast',
					text: 'Does 20 damage for each basic Energy card attached to Rayquaza ex.',
					damage: '20×',
					convertedEnergyCost: 2
				}
			],
			resistances: [
				{
					type: 'Water',
					value: '-30'
				},
				{
					type: 'Fighting',
					value: '-30'
				}
			],
			weaknesses: [
				{
					type: 'Colorless',
					value: '×2'
				}
			],
			type: 'Colorless'
		},{
			id: 'xy0-14',
			name: 'Greninja',
			nationalPokedexNumber: 658,
			imageUrl: 'https://images.pokemontcg.io/xy0/14.png',
			imageUrlHiRes: 'https://images.pokemontcg.io/xy0/14_hires.png',
			supertype: 'Pokémon',
			subtype: 'Stage 2',
			evolvesFrom: 'Frogadier',
			hp: '140',
			retreatCost: [
				'Colorless'
			],
			convertedRetreatCost: 1,
			number: '14',
			artist: '5ban Graphics',
			rarity: '',
			series: 'XY',
			set: 'Kalos Starter Set',
			setCode: 'xy0',
			attacks: [
				{
					cost: [
						'Water'
					],
					name: 'Mat Block',
					text: 'Flip a coin. If heads, discard an Energy attached to your opponent\'s Active Pokémon.',
					damage: '40',
					convertedEnergyCost: 1
				},
				{
					cost: [
						'Water',
						'Water',
						'Colorless'
					],
					name: 'Aqua Edge',
					text: '',
					damage: '80',
					convertedEnergyCost: 3
				}
			],
			weaknesses: [
				{
					type: 'Grass',
					value: '×2'
				}
			],
			type: 'Water'
		},{
			id: 'xy0-15',
			name: 'Clauncher',
			nationalPokedexNumber: 692,
			imageUrl: 'https://images.pokemontcg.io/xy0/15.png',
			imageUrlHiRes: 'https://images.pokemontcg.io/xy0/15_hires.png',
			supertype: 'Pokémon',
			subtype: 'Basic',
			hp: '70',
			retreatCost: [
				'Colorless'
			],
			convertedRetreatCost: 1,
			number: '15',
			artist: '5ban Graphics',
			rarity: '',
			series: 'XY',
			set: 'Kalos Starter Set',
			setCode: 'xy0',
			attacks: [
				{
					cost: [
						'Water',
						'Colorless'
					],
					name: 'Water Gun',
					text: '',
					damage: '20',
					convertedEnergyCost: 2
				}
			],
			weaknesses: [
				{
					type: 'Grass',
					value: '×2'
				}
			],
			type: 'Water'
		}
	]
	
	 const CardBlocks = pokemons.map((pokemon) => {
			return <CardBlock
				pokemon={pokemon}
				buttonText='Add'
				buttonHandler={() => console.log('add')}
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

export default AddPokemonModal