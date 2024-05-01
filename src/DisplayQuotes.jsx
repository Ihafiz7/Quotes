import React from 'react'

const DisplayQuotes = ({quotes, fetchQuotes}) => {
  return (
    <div className='flex items-center justify-center'>
      {quotes && (
        <div className='flex flex-col items-center sm:w-3/4 md:w-1/2 xl:w-1/2 h-auto justify-center p-4 gap-4'>
          <p className='font-play text-3xl text-center tracking-wide break-words'>
              {quotes[0].content}
          </p>
          <p className='font-play text-2xl self-end italic tracking-wider'>
              -{quotes[0].author}
          </p>
          <button id='button' onClick={fetchQuotes} className='font-sans text-xl italic p-2 bg-green-500 rounded-md text-white hover:bg-blue-400 hover:text-black transition-colors duration-500 ease-in-out'>New Quote</button>
        </div>
      )}
    </div>
  )
}

export default DisplayQuotes