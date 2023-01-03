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
    return setClickedList([...clickedList, newDot])
  }

  const handleUndo = (event) => {
    event.stopPropagation()
    // Remove from clicked list
    setClickedList([...clickedList.slice(0, -1)])
    // Add to removed list
    setRemovedList([...removedList, clickedList.at(-1)])
  }

  const handleRedo = (event) => {
    event.stopPropagation()
    // Remove from removed list
    setRemovedList((removedList) => {
      const newArr = [...removedList].slice(0, -1)
      return newArr
    })
    // Add to clicked list
    setClickedList([...clickedList, removedList.at(-1)])
  }

  return (
    <div className="App" onClick={handleClick}>
      {clickedList.map((circle) => {
        return <div className='click' style={{ left: circle.clientX, top: circle.clientY }}></div>
      })}
      <button onClick={handleUndo} type="button" className="btn btn-secondary undo-action">Undo</button>
      <button onClick={handleRedo} type="button" className="btn btn-primary redo-action">Redo</button>
    </div>
  );
}

export default App;
