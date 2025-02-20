import logo from '../logo.svg';
import '../css/UpgradeMenu.css';
import { useEffect, useState } from 'react';
import image from "../img/menuBackground.png";

function UpgradeMenu() {
  

  return (
    <div className="upgradeMenu" style={{ backgroundImage:`url(${image})`, backgroundRepeat:"round", backgroundSize:"cover"}}>
        <p>upgradeMenu</p>
    </div>
  );
}

export default UpgradeMenu;
