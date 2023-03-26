import React from 'react'
import './styles/Buttom.css'

const Buttom = ({handleNewQuote}) => {
  return (
    <button className='buttom' onClick={handleNewQuote}>Change</button>
  )
}

export default Buttom