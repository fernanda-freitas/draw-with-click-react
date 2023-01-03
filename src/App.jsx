import { useState } from 'react';
import './App.css';

function App() {
  const [clickList, setClickList] = useState([]);
  const [lastItem, setLastItem] = useState([])

  const handleClick = (e) => (
    setClickList([ ...clickList , {x: e.clientX, y: e.clientY }])
  )

  const handleUndo = (e) => {
    e.stopPropagation()
    setClickList(clickList.slice(0, -1))
  }

  return (
    <div className="App" onClick={handleClick}>
      {clickList.map((circle) => {
        return <div className='click' style={{left: circle.x, top: circle.y}}></div>
      })}
      <button onClick={handleUndo} type="button" className="btn btn-primary undo-action">Undo</button>
    </div>
  );
}

export default App;
