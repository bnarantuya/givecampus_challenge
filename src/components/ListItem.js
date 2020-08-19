import React, { useState } from 'react';
function ListItem({ item, deleteItem, completeItem, ind }) {

  const [completed, setComplete] = useState(item.completed);
  const completeTask = () => {
    if (completed) {
      setComplete(false);
      completeItem(ind);
    }
    else {
      setComplete(true);
      completeItem(ind);
    }
  }
  return (
    <div className={`ListItem` + (completed ? ' Completed' : '')}>
      <div className="item-icon" onClick={completeTask}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /></svg></div>
      <div className="item">{item.name}</div>
      <div className="date">{item.date}</div>
      <button className="close" onClick={e => deleteItem(ind)}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg></button>
    </div>
  )
}

export default ListItem;
