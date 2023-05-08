//import react into the bundle
import React,{useState} from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

const greenDisabled = <button className="btn btn-success">Verde ko</button>
const greenActive =<button className="btn brn-primary">Verde ok</button>


function Semáforo() {
    const [estado, setEstado] = useState({
      rojo: false,
      amarillo: false,
      verde: false
    });
  
    return (
      <div>
        <div className={estado.rojo ? 'rojo encendido' : 'rojo apagado'}></div>
        <div className={estado.amarillo ? 'amarillo encendido' : 'amarillo apagado'}></div>
        <div className={estado.verde ? 'verde encendido' : 'verde apagado'}></div>
      </div>
    );
  }
  const greenLight =() =>{
    return greenColor ? greenColor :greenChange(true);
  }
  
  javascript
 
  function Semáforo() {
    const [estado, setEstado] = useState({
      rojo: false,
      amarillo: false,
      verde: false
    });
  
    function encenderRojo() {
      setEstado({
        rojo: true,
        amarillo: false,
        verde: false
      });
    }
  
    return (
      <div>
        <div className={estado.rojo ? 'rojo encendido' : 'rojo apagado'}></div>
        <div className={estado.amarillo ? 'amarillo encendido' : 'amarillo apagado'}></div>
        <div className={estado.verde ? 'verde encendido' : 'verde apagado'}></div>
        <button onClick={encenderRojo}>Rojo</button>
      </div>
    );
  }

  
  
  
  
  
  