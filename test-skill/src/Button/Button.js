import './Button.css'
import { useState } from 'react';


function Botona() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick} className="btn">
      Clicked {count} times
    </button>
  );
}

export default Botona;