import './css/App.css';
import { useEffect, useState } from 'react';
import MainComponent from './components/MainComponent';
import UpgradeMenu from './components/UpgradeMenu';
import InformationMenu from './components/InformationMenu';

function App() {
  const [totalLogs, setTotalLogs] = useState(0)
  const [ticking, setTicking] = useState(false);
  const [logsPerSecond, setLogsPerSecond] = useState(0);
  window.totalLogs = totalLogs
  window.setTotalLogs = setTotalLogs
  useEffect(() => {
    setTotalLogs(Number(localStorage.getItem('totalLogs')))
  },[])
  return (
    <div className="App">
      <MainComponent setTotalLogs={setTotalLogs} totalLogs={totalLogs} ticking={ticking} logsPerSecond={logsPerSecond} />
      <UpgradeMenu setTotalLogs={setTotalLogs} totalLogs={totalLogs} setTicking={setTicking} logsPerSecond={logsPerSecond} setLogsPerSecond={setLogsPerSecond}/>
      <InformationMenu />
    </div>
  );
}

export default App;
