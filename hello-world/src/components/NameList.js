import React from 'react'
import {Person} from './Person'

function NameList() {
  const person = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Vue'
    } 
  ]
  const NameList = person.map(
    p => (
      <Person key = {p.id } person = {p}/>
    )
  )
  return (
    <div>
      {NameList}
    </div>
  )
}

export default NameList
