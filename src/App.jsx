import { useState } from 'react';
import './App.css';

function App() {
  const [clickedList, setClickedList] = useState([]);
  const [removedList, setRemovedList] = useState([])

  const handleClick = (event) => {
    const newDot = {
      clientX: event.clientX,
      clientY: event.clientY
    }
    return setClickedList([ ...clickedList , newDot])
  }


  const handleUndo = (event) => {
    event.stopPropagation()
    setClickedList([...clickedList.slice(0,-1)])
    const lastItem = clickedList[clickedList.length - 1]
    setRemovedList([...removedList, lastItem])
  }

  const handleRedo = (event) => {
    event.stopPropagation()

    setClickedList((prev) => {
      return [...prev, removedList[removedList.length - 1]]
    })
  }

  return (
    <div className="App" onClick={handleClick}>
      {clickedList.map((circle) => {
        return <div className='click' style={{left: circle.clientX, top: circle.clientY}}></div>
      })}
      <button onClick={handleUndo} type="button" className="btn btn-secondary undo-action">Undo</button>
      <button onClick={handleRedo} type="button" className="btn btn-primary redo-action">Redo</button>
    </div>
  );
}

export default App;
