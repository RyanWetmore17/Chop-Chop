import logo from '../logo.svg';
import '../css/App.css';
import { useEffect, useState } from 'react';
import image from "../img/sky.jpg";

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
    <div className="App" style={{ backgroundImage:`url(${image})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", height:'100vh', width:'100vw'}}>
      
    {/* <div>
      <div>{totalLogs}</div>
      <button onClick={() => setTicking(false)}>pause</button>
      <button onClick={() => setTicking(true)}>resume</button>
    </div> */}
      <header className="App-header">

        <button onClick={handleClick}>
          <div className='above container'>
            <img src={require('../img/tree.png')} id='treeImage'/>
            <img src={require('../img/chopmanslow.gif')}  className='chopmanGif'/>
          </div>
        </button>
          <p className='above'>{logs + totalLogs}</p>
          <img className='grassImage' src={require('../img/grass.png')} />
      </header>
    </div>
  );
}

export default MainComponent;
