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
		
		<div className="bg-image container ">
			
			<div className="base bg-black mx-auto col-1 d-flex justify-content-center">
			<div className=" d-flex flex-column justify-content:center p-2">
				<div onClick={() => handleSemaforo('red')} id="red"  className={`btn bg-danger text-center rounded-circle col-1 mb-1 ${rojo && "selected"}`} ></div>
				<div onClick={(e)=>handleSemaforo(e.target.id,)} id="yellow" className={`btn bg-warning rounded-circle col-1  mb-1 ${amarillo && "selected"}`}></div>
				<div onClick={(e)=>handleSemaforo(e.target.id)} id="green" className={`btn bg-success rounded-circle col-1  mb-1, ${verde && "selected"}`}></div>
				</div>
			
			</div>
		</div>
		
	);
};





	


export default Home;
