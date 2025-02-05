import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const [ticking, setTicking] = useState(true),
        [count, setCount] = useState(0)
   
   useEffect(() => {
    const timer = setTimeout(() => {
      ticking && setCount(count+1)
      // if (count > 150000) {
      //   setCount(0)
      //   setTicking(false)
      // }
    }, 1000)
    return () => clearTimeout(timer)
   }, [count, ticking])
  const [logs, setLogs] = useState(0);
  function handleClick() {
    setLogs(a => a + 1);
    // ...
  }
  return (
    <div className="App">
      
    {/* <div>
      <div>{count}</div>
      <button onClick={() => setTicking(false)}>pause</button>
      <button onClick={() => setTicking(true)}>resume</button>
    </div> */}
      <header className="App-header">

        <button onClick={handleClick}>
          <div className='container'>
          <img src={require('./img/tree.png')} id='treeImage'/>
          <p className='centered'>{logs + count}</p>

        <img src={require('./img/chopmanslow.gif')}  className='funny'/>
          
          </div>
        </button>
      </header>
    </div>
  );
}

export default App;
