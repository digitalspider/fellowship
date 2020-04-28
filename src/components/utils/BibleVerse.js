import React from 'react'
import './BibleVerse.css'

const BibleVerse = ({reference, text}) => {

  const url = "https://www.bible.com/en-GB/bible/114/"+reference+".NKJV"

  return (
    <a class="bible-verse" href={url} target="_blank" rel="noopener noreferrer">{text}</a>
  )

}

export default BibleVerse
