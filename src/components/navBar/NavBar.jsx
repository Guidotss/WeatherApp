import { Form } from "../form/Form"
import "./estilos.css"; 

export const NavBar = ({setCity}) => {
  return (  
    <header>
        <h2>Weather App</h2>
        <nav>
            <Form setCity = {setCity}/>
        </nav>
    </header>
  ) 
}