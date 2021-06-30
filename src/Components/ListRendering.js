import React,{Component} from 'react'
import Person from './Person'
import Styles from '../myStylesheet.module.css'

class ListRendering extends Component{
	constructor(props){
		super(props)
	}
	render(){
		const persons = [
		{
			id:1,
			name:'Tom',
			age:24,
			skil:'Php'
		},{
			id:2,
			name:'Jerry',
			age:25,
			skil:'Node'
		},{
			id:3,
			name:'Jon',
			age:26,
			skil:'React'
		}
		]
		const personList = persons.map(person=><Person key={person.id} person={person} />)

		// const names = ['Tom','Jerry','Jon']
		// const namesList = names.map((name,index) => <h1 key={index}>{name}</h1>)

		return <div className={Styles.success}>{personList}</div>

	}
}

export default ListRendering