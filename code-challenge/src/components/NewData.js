import React from 'react';

function NewData(props) {

  const handleDelete = (index) => {
    const updatedData = [...props.handleSubmitData];
    updatedData.splice(index, 1); // Remove the item at the specified index
    props.setSubmitData(updatedData); // Update the state with the new array
  };
  const handleSubmitData = props.handleSubmitData.map((data, index) => (
    <div key={index}>
      {data.date}
      {data.description}
      {data.category}
      {data.amount}
      <button type='button' className='blue' onClick={() => handleDelete(index)}>
        Delete
      </button>
    </div>
  ));

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input  type='date' value={props.date} onChange={props.handleDate} />
        <input type='text' placeholder='Description' value={props.description} onChange={props.handleDescription} />
        <input type='text' placeholder='Category' value={props.category} onChange={props.handleCategory} />
        <input type='text' placeholder='Amount' value={props.amount} onChange={props.handleAmount} />
        <button type='submit' className='red'>Add Transaction</button>
        <button type='button'className='blue'onClick={handleDelete}>Delete Transaction</button>

         {props.handleSubmitData}
      </form>
    </div>
  );
}

export default NewData;
