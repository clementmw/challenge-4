import React, {useState} from 'react'
import '../css/Navbar.css'
import NewData from './NewData'

function Navbar() {
  const [date, setDate] = useState('')
  const [description, setDesrption] = useState('cake')
  const [category, setCategory] = useState('banana')
  const [amount, setAmount] = useState('200')

  const handleDate = (e) => {
    setDate(e.target.value)
  }
  const handleDescrption = (e) => {
    setDesrption(e.target.value)
  }
  const handleCategory = (e) => {
    setCategory(e.target.value)
  }
  const handleAmount = (e) => {
    setAmount(e.target.value)
  }
  return (
    <div>
        <h1>The Royal Bank of Flatiron</h1>

        <div className="container">
        <input type='text' placeholder='Search your recent transactions ....' />
        <button type='button'>Search</button>
    </div>
    <span >
        <NewData
          date={date}
          description={description}
          category={category}
          amount={amount}
          handleDate={handleDate}
          handleDescription={handleDescrption}
          handleCategory={handleCategory}
          handleAmount={handleAmount}
        />
        
        
    </span>
    <button className='red'>Add Transaction</button>
    <button className='blue'>Delete Transaction</button>
    </div>
  )
}

export default Navbar