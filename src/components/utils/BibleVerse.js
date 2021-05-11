import React from 'react'
import './BibleVerse.css';

const BibleVerse = ({ reference, text }) => {

  const url = "https://www.bible.com/en-GB/bible/59/" + reference + ".ESV"

  return (
    <a class="bible-verse" href={url} target="_blank" rel="noopener noreferrer">{text}</a>
  )

}

export default BibleVerse
