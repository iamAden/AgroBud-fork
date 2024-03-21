// Filename - Progress_bar.js

import React from 'react'

const Progress_bar = ({bgcolor,progress,height}) => {
	
	const Parentdiv = {
		height: height,
		width: '100%',
		backgroundColor: "#E9E9E9",
		borderRadius: 40,
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	    borderRadius:40,
		textAlign: 'right'
	}
	
	
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
	</div>
	</div>
	)
}

export default Progress_bar;
