import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	return (
		
		<div className="text-center container ">
			<p>Hello</p>
			<div className="col-1 bg-dark text-center d-flex">
				<ul className="p-1">
				<li className="btn red bg-danger rounded-circle col-6 mb-1"></li>
				<li className="btn yellow bg-warning rounded-circle col-6 mb-1"></li>
				<li className="btn green bg-success rounded-circle col-6 mb-1"></li>
				</ul>
			</div>
		</div>
		
	);
};
let  semaforo =()=>{
	const [rojo, setRojo] = useState(true);
  const [amarillo, setAmarillo] = useState(false);
  const [verde, setVerde] = useState(false);

}
function cambiarLuz() {
    if (rojo) {
      setRojo(false);
      setVerde(true);
    } else if (verde) {
      setVerde(false);
      setAmarillo(true);
    } else {
      setAmarillo(false);
      setRojo(true);
    }
  }


export default Home;
