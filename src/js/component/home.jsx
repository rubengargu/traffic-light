import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

  const [rojo, setRojo] = useState(false);
  const [amarillo, setAmarillo] = useState(false);
  const [verde, setVerde] = useState(false);
  console.log(rojo,amarillo,verde);

  const handleSemaforo = (id) =>{
		switch(id){
			case "red":
				setRojo(true);
				setAmarillo(false);
				setVerde(false);
			case "yellow":
				setRojo(false);
				setAmarillo(true);
				setVerde(false);

			case "green":
				setRojo(false);
				setAmarillo(false);
				setVerde(true);
		}
  }

	return (
		
		<div className="text-center container ">
			<p>Hello</p>
			<div className="col-1 bg-dark text-center ">
				<ul className="p-1 d-flex flex-column justify-content-center">
				<li onClick={()=>handleSemaforo(id)} id="red" className="btn bg-danger rounded-circle col-6 mb-1"></li>
				<li onClick={()=>handleSemaforo(id)} id="yellow" className="btn bg-warning rounded-circle col-6 mb-1"></li>
				<li onClick={()=>handleSemaforo(id)} id="green" className="btn bg-success rounded-circle col-6 mb-1"></li>
				</ul>
			</div>
		</div>
		
	);
};





	


export default Home;
