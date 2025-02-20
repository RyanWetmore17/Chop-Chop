import logo from '../logo.svg';
import '../App.css';
import { useEffect, useState } from 'react';

function MainComponent() {
  
  const [ticking, setTicking] = useState(true),
        [totalLogs, setTotalLogs] = useState(0)
   
   useEffect(() => {
    const timer = setTimeout(() => {
      ticking && setTotalLogs(totalLogs+1)
      // if (totalLogs > 150000) {
      //   settotalLogs(0)
      //   setTicking(false)
      // }
    }, 1000)
    return () => clearTimeout(timer)
   }, [totalLogs, ticking])
  const [logs, setLogs] = useState(0);
  function handleClick() {
    setLogs(a => a + 1);
    // ...
  }
  return (
    <div className="App">
      
    {/* <div>
      <div>{totalLogs}</div>
      <button onClick={() => setTicking(false)}>pause</button>
      <button onClick={() => setTicking(true)}>resume</button>
    </div> */}
      <header className="App-header">

        <button onClick={handleClick}>
          <div className='container'>
          <img src={require('../img/tree.png')} id='treeImage'/>
          <p className='centered'>{logs + totalLogs}</p>

        <img src={require('../img/chopmanslow.gif')}  className='funny'/>
          
          </div>
        </button>
      </header>
    </div>
  );
}

export default MainComponent;
