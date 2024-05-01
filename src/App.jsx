import React from 'react'
import FetchQuotes from './FetchQuotes'
import DisplayQuotes from './DisplayQuotes'
import Header from './Header'

const App = () => {
  return (
    <div>
      <Header />
      <FetchQuotes />
      <DisplayQuotes />
    </div>
  )
}

export default App