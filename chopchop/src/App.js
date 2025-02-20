import logo from './logo.svg';
import './css/App.css';
import { useEffect, useState } from 'react';
import MainComponent from './components/MainComponent';
import UpgradeMenu from './components/UpgradeMenu';
import InformationMenu from './components/InformationMenu';

function App() {
  return (
    <div className="App">
      <MainComponent />
      <UpgradeMenu />
      <InformationMenu />
    </div>
  );
}

export default App;
