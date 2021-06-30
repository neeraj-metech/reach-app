import React from 'react'

function Person({person}){
	return(
		<div>
			<h1>{person.name} has {person.age} old and his skil is {person.skil}</h1>
		</div>
		)
}

export default Person
