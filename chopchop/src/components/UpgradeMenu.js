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
  const [saveTimerTicking, setSaveTimerTicking] = useState(true)
  function saveGame() {
    console.log("Game Saved")
    localStorage.setItem('totalLogs', props.totalLogs)
    localStorage.setItem('workers', workers)
  }
  function resetGame() {
    console.log("Game Reset")

    // Set all stored values to 0
    localStorage.setItem('totalLogs', 0)
    localStorage.setItem('workers',  0)

    // Set all actual values to 0
    props.setTotalLogs(0)
    setWorkers(0)
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      saveTimerTicking && setSaveTimerCount(saveTimerCount + 1)
      saveGame();
    }, (60000))
    return () => clearTimeout(timer)
  },[saveTimerTicking, saveTimerCount])
  useEffect(() => {
    setWorkers(Number(localStorage.getItem('workers')))
  },[])
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
