import logo from '../logo.svg';
import '../css/InformationMenu.css';
import { useEffect, useState } from 'react';
import image from "../img/menuBackground.png";

function InformationMenu() {
  

  return (
    <div className="informationMenu" style={{ backgroundImage:`url(${image})`, backgroundRepeat:"round", backgroundSize:"cover"}}>
        <p>informationMenu</p>
    </div>
  );
}

export default InformationMenu;
