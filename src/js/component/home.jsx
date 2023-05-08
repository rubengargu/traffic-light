import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [greenColor, greenChange] =useState(true)
	const [yellowColor, yellowChange] = useState(true)
	const [redColor, redChange] = useState(true)
	
	const greenLight = () => {
		return greenColor ? <button className="btn btn-success">Verde encendido</button>
	}
	return (
		
		<div className="text-center container ">
			<p>Hello</p>
			<div className="col-2 bg-dark text-center">
				<ul className="p-1">
				<li className=" {estado.rojo ? 'rojo encendido' : 'rojo apagado'} bg-danger rounded-circle col-6"></li>
				<li className=" {estado.amarillo ? 'amarillo encendido' : 'amarillo apagado'} bg-warning rounded-circle col-6"></li>
				<li className=" {estado.verde ? 'verde encendido' : 'verde apagado'} bg-success rounded-circle col-6"></li>
				</ul>
			</div>
		</div>
		
	);
};
const greenLight =() =>{
	return greenColor ? 
}
export default Home;
