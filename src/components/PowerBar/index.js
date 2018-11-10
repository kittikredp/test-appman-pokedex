import React from 'react'
import './index.scss'	

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

export default PowerBar
