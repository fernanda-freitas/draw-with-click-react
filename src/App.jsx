import { useState } from 'react';
import './App.css';

function App() {
  const [clickList, setClickList] = useState([]);
  const [undid, setUndid] = useState([])

  const handleClick = (e) => (
    setClickList([ ...clickList , {x: e.clientX, y: e.clientY }])
  )

  const handleUndo = (event) => {
    event.stopPropagation()

    setClickList((prev) => {
      const newArr = [...prev].slice(0,-1)
      return newArr
    })

    const lastItem = clickList[clickList.length - 1]
    setUndid((prev) => {
      return [...prev, lastItem]
    })
  }

  const handleRedo = (event) => {
    event.stopPropagation()

    setClickList((prev) => {
      return [...prev, undid[undid.length - 1]]
    })
  }

  return (
    <div className="App" onClick={handleClick}>
      {clickList.map((circle) => {
        return <div className='click' style={{left: circle.x, top: circle.y}}></div>
      })}
      <button onClick={handleUndo} type="button" className="btn btn-secondary undo-action">Undo</button>
      <button onClick={handleRedo} type="button" className="btn btn-primary redo-action">Redo</button>
    </div>
  );
}

export default App;
