import React from 'react';
import Buttom from './Buttom';
import "./styles/container.css"

const container = ({quote, handleNewQuote}) => {
    


  return (
    <section className='container'>
          <h1 className='container_title'>MYSTERIES OF THE UNIVERSE</h1>

          <article className='container_Article_1'>
            <p className='container_text'>{quote.phrase} </p>
          </article>

        <Buttom handleNewQuote={handleNewQuote} />

          <article className='container_Article_2'> 
            <h4 className='container_source'>Source: {quote.author} </h4>
          </article>

        </section>
  )
}

export default container;