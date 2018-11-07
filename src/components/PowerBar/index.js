// import PropTypes from 'prop-types'
import React from 'react'
import './index.css'	

export const PowerBar = (props) => {
  
  const {title, power} = props

  return (
		<div className="power-bar">
			<div className="title">{title}</div>
			<div className="bar">
				<div style={{width: power+'%' }}></div>
			</div>
		</div>
  )
}

// CardBlock.propTypes = {
//   remove: PropTypes.func,
//   pokemon:PropTypes.object,
// }

export default PowerBar
