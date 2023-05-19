import React, { useState } from "react";
import "../../styles/index.css";


//create your first component
const Home = () => {

  const [rojo, setRojo] = useState(false);
  const [amarillo, setAmarillo] = useState(false);
  const [verde, setVerde] = useState(false);
  console.log(rojo,amarillo,verde)	
  

  const handleSemaforo = (id) =>{
	console.log(id);
		switch(id){
			case "red":
				setRojo(true);
				setAmarillo(false);
				setVerde(false);
				break
			case "yellow":
				setRojo(false);
				setAmarillo(true);
				setVerde(false);
				break

			case "green":
				setRojo(false);
				setAmarillo(false);
				setVerde(true);
				break
		}
	
  }
	return (
		
		<div className="text-center container ">
		<div className="base  mt-4 col-2  traffic">
		  <ul className="p-1 col-4 d-flex flex-column justify-content-center align-items-center text-center">
			<li onClick={() => handleSemaforo('red')} id="red" className={`btn bg-danger rounded-circle h-100 col-6 mb-1 mt-4 ${rojo && "selected-red"} `}></li>
			<li onClick={(e)=>handleSemaforo(e.target.id)} id="yellow" className={`btn bg-warning rounded-circle col-6 h-100 mt-1 mb-1 ${amarillo && "selected-yellow"} `}></li>
			<li onClick={(e)=>handleSemaforo(e.target.id)} id="green" className={`btn bg-success rounded-circle col-6 h-100 mt-1 mb-4 ${verde && "selected-green"} `}></li>
		  </ul>
		</div>
		<div className="stick col-1"></div>
	  </div>

	  
		
	);
};





	


export default Home;
