import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <h1 onClick={() => props.greetHandler('child')}>Greet Parent</h1>
    </div>
  )
}

export default ChildComponent
