import { useEffect, useState } from 'react';
import '../css/UpgradeMenu.css';
import image from "../img/menuBackground.png";

function UpgradeMenu(props) {
  const [workerCost, setWorkerCost] =  useState(10);
  const [workers, setWorkers] =  useState(0);
  let workersMultiplier = 0.1;
  const updateLogsPerSecond = () => props.setLogsPerSecond((workers * workersMultiplier + workersMultiplier) + (0));
  function handleWorkersClick() {
    updateLogsPerSecond();
    props.setTicking(true)
    setWorkers(a => a + 1);
    props.setTotalLogs(logs => logs - workerCost)
    setWorkerCost(a => Math.ceil(a * 1.18))
  }
  const [saveTimerCount, setSaveTimerCount] = useState(0)
  const [saveTimerTicking, setSaveTimerTicking] = useState(false)
  function saveGame() {
    localStorage.setItem('totalLogs', props.totalLogs)
    localStorage.setItem('logsPerSecond', props.logsPerSecond)
    localStorage.setItem('workers', workers)
    localStorage.setItem('workerCost', workerCost)

    // Get Time
    let time = new Date()
    let currentHours = time.getHours()
    if (currentHours < 10) {
      currentHours = "0" + currentHours
    }
    let currentMinutes = time.getMinutes()
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes
    }
    let currentSeconds = time.getSeconds()
    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds
    }

    return "Game Saved at: " + currentHours + ":" + currentMinutes + ":" + currentSeconds
  }
  function resetGame() {

    // Reset all stored values to defaults
    localStorage.setItem('totalLogs', 0)
    localStorage.setItem('logsPerSecond', 0)
    localStorage.setItem('workers', 0)
    localStorage.setItem('workerCost', 10)

    // Set all actual values to 0
    props.setTicking(false)
    props.setTotalLogs(0)
    props.setLogsPerSecond(0)
    setWorkers(0)
    setWorkerCost(10)

    return "Game Reset"
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      saveTimerTicking && setSaveTimerCount(saveTimerCount + 1)
      console.log(saveGame())
    }, (5000))
    return () => clearTimeout(timer)
  },[saveTimerTicking, saveTimerCount])

  // On window start
  useEffect(() => {
    props.setTotalLogs(Number(localStorage.getItem('totalLogs')))
    props.setLogsPerSecond(Number(localStorage.getItem('logsPerSecond')))
    setWorkers(Number(localStorage.getItem('workers')))
    setWorkerCost(Number(localStorage.getItem('workerCost')))
    if (localStorage.getItem('logsPerSecond') > 0) {
      props.setTicking(true)
    }
    setSaveTimerTicking(true)
  },[])
  useEffect(() => {
    setSaveTimerTicking(false)
    setSaveTimerTicking(true)
  },[props.totalLogs, props.logsPerSecond])
  window.saveGame = saveGame
  window.resetGame = resetGame
  return (
    <div className="upgradeMenu" style={{ boxShadow:"inset 0 0 0 1000px rgba(0, 14, 81, 0.38)", backgroundImage:`url(${image})`, backgroundRepeat:"round", backgroundSize:"cover"}}>
        <p>Upgrades</p>
        <button style={{ backgroundImage:`url(${image})`, backgroundRepeat:"round", backgroundSize:"cover"}} className='workersButton' disabled={props.totalLogs < workerCost} onClick={handleWorkersClick}>
          Workers: {workers}
          <br />
          Cost: {workerCost}
        </button>
        <script></script>
    </div>
  );
}

export default UpgradeMenu;
