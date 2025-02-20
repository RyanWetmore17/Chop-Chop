import '../css/App.css';
import { useEffect, useState } from 'react';
import image from "../img/sky.jpg";

function divideIfNotZero(numerator, denominator) {
  if (denominator === 0 || isNaN(denominator)) {
    return 0;
  } else {
    return numerator / denominator;
  }
}
function MainComponent(props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.ticking && props.setTotalLogs(a => a + 1)
      // When more upgrades, add like workers
    }, (divideIfNotZero(1000, props.logsPerSecond)))
    return () => clearTimeout(timer)
   }, [props.workers, props.totalLogs, props.ticking])
   
  function handleClick() {
    props.setTotalLogs(a => a + 1);
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
          <p className='above'>Total Logs: {props.totalLogs}</p>
          <p  className='above logsPerSecondText'>logs per second: {Math.floor(props.logsPerSecond * 1000) / 1000}</p>
          <img className='grassImage' src={require('../img/grass.png')} />
      </header>
    </div>
  );
}

export default MainComponent;
