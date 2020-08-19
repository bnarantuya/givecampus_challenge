import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
function Popup({ setPopUp, list, setList }) {
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState('');
  const addNew = () => {
    const date = '' + (startDate.getMonth() + 1) + '/' + startDate.getDate() + '/' + startDate.getFullYear();
    const data = { name: name, date: date, completed: false }
    localStorage.setItem('todo-list', JSON.stringify([...list, data]));
    setList([...list, data]);
    setPopUp(false);
  }
  return (
    <div className="Popup">
      <div className="addNew">
        <span className="close" onClick={() => setPopUp(false)}>&times;</span>
        <input type="text" onChange={e => setName(e.target.value)}></input>
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
        <button onClick={addNew}>Add</button>
      </div>
    </div>
  )
}

export default Popup
