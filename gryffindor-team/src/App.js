
import './App.scss';
import cn from "classnames"
import { useState } from 'react';

function App() {
  const [val, setVal] = useState(false)




  return (
    <div className={cn("App", { "text": val})}>
      <button onClick={()=>{setVal(true)}}>+</button>
      <h1>Barev</h1>
    </div>
  );
}

export default App;
