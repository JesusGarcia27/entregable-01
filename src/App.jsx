import { useState } from 'react'
import './App.css'
import db from './db/db.json'
import Container from './components/Container'

const images = ['space1', 'space2', 'space3', 'space4']

function App() {

  const getRamdomItem = (listItems) => {
     const randomIndex = Math.floor(Math.random() * listItems.length)

     return listItems[randomIndex]
  }

  const [quote, setQuote] = useState(getRamdomItem(db))

  const [spaceImages, setSpaceImages] = useState(getRamdomItem(images))

  const handleNewQuote = () => {
    setQuote(getRamdomItem(db))
    setSpaceImages(getRamdomItem(images))
  }
  
  return (
    <div className={`App ${spaceImages}`} >
      
      <Container quote={quote} handleNewQuote={handleNewQuote} />

      {/* <img src="/images/space1.jpg" alt="" /> */}

    </div>
  )
}

export default App
