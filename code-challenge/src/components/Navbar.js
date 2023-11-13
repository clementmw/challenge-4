import React from 'react'

function Navbar() {
  return (
    <div>
          <h1 style={{color: 'blue', border: "solid 2px #0000FF", margin: '20px', textAlign:'center'}}>The Royal Bank of Flatiron</h1>
      
      <div >
        <input type='text' placeholder='Search your recent transactions ....' />
        <button type='button'>Search</button>
        </div>

    </div>
  )
}

export default Navbar