import '../css/InformationMenu.css';
import image from "../img/menuBackground.png";

function InformationMenu() {
  

  return (
    <div className="informationMenu" style={{ boxShadow:"inset 0 0 0 1000px rgba(0, 14, 81, 0.38)",  backgroundImage:`url(${image})`, backgroundRepeat:"round", backgroundSize:"cover"}}>
        <p>informationMenu</p>
    </div>
  );
}

export default InformationMenu;
