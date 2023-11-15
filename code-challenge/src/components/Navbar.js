import React, { useState } from 'react';
import '../css/Navbar.css';
import NewData from './NewData';


function Navbar() {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [submitData, setSubmitData] = useState([]);

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
   // to handle form 
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date: date, description: description, category: category, amount: amount };
    const newArray = [...submitData, formData];
    setSubmitData(newArray);

    // Clear the input fields after submission
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  };

  const handleSubmitData = submitData.map((data, index) => (
    <div key={index}>
      {data.date}
      {data.description}
      {data.category}
      {data.amount}
    </div>
  ));

  return (
    <div>
      <h1>The Royal Bank of Flatiron</h1>

      <div className="container">
        <input type='text' placeholder='Search your recent transactions ....' />
        <button type='button'>Search</button>
      </div>
{/* the data to be passed as props */}
      <span>
        <NewData
          date={date}
          description={description}
          category={category}
          amount={amount}
          handleDate={handleDate}
          handleDescription={handleDescription}
          handleCategory={handleCategory}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          handleSubmitData={handleSubmitData}
          submitData={submitData}
          setSubmitData={setSubmitData}
        />
      
      </span>
    </div>
  );
}

export default Navbar;
