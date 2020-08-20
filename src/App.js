import React, { useState } from 'react';
import './App.css';
import Popup from './components/Popup';
import ListItem from './components/ListItem';

function App() {
  let lStorage = localStorage.getItem('todo-list');
  if (lStorage == null) {
    lStorage = [];
  } else {
    lStorage = JSON.parse(lStorage)
  }
  const [popUpState, setPopUpState] = useState(false);
  const [list, setList] = useState(lStorage);
  const addTask = () => {
    setPopUpState(true);
  }

  const deleteItem = (index) => {
    const temp = [...list];
    temp.splice(index, 1);
    localStorage.setItem('todo-list', JSON.stringify(temp));
    setList(temp);
  }

  const completeItem = (index) => {
    const temp = [...list];
    temp[index].completed = !temp[index].completed;
    localStorage.setItem('todo-list', JSON.stringify(temp));
    setList(temp);
  }
  return (
    <div className="App">
      <div className="content">
        {popUpState && <Popup setPopUp={setPopUpState} list={list} setList={setList} />}
        <div className="Header">
          <h2>TODO</h2>
          <p>Let's get some stuffs done today!</p>
        </div>
        <button className="add" onClick={addTask}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
          <div>Add task</div>
        </button>
        <div className="ListContainer">
          {
            list.length > 0 && list.map((item, index) => (
              <ListItem
                item={item}
                key={index}
                ind={index}
                completeItem={completeItem}
                deleteItem={deleteItem} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
