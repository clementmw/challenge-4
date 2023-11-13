import React from 'react'

function Navbar() {
  return (
    <div>
          <h1 style={{color: 'blue', border: "solid 2px #0000FF", margin: '20px', textAlign:'center'}}>The Royal Bank of Flatiron</h1>
      
      <div style={{marginBottom: '10px'}} >
        <input type='text' placeholder='Search your recent transactions ....' />
        <button type='button'>Search</button>
        </div>
    <span >
        <input type='date' style={{marginLeft: '50px'}} />
        <input type='text.' placeholder='Description' style={{marginLeft: '10px'}} />
        <input type='text' placeholder='Categoty'style={{marginLeft: '10px'}}  />
        <input type='text' placeholder='Amount' style={{marginLeft: '10px'}} />
    </span>
    <button>Add Transaction</button>

    </div>
  )
}

export default Navbar