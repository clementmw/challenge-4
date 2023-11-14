import React from 'react';

function NewData(props) {
  return (
    <div>
      <form>
        <input type='date' value={props.date} onChange={props.handleDate} />
        <input type='text' placeholder='Description' value={props.description} onChange={props.handleDescription} />
        <input type='text' placeholder='Category' value={props.category} onChange={props.handleCategory} />
        <input type='text' placeholder='Amount' value={props.amount} onChange={props.handleAmount} />
      </form>
    </div>
  );
}

export default NewData;
