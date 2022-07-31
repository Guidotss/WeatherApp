import { useForm } from "../../hooks/index"; 
import "./estilos.css"; 

export const Form = ({setCity}) => {
    const { input,onInputChange }  = useForm({
        city: "",
    });
    const { city } = input
    
    const handleSubmit = (e) => {
        
        e.preventDefault();
        const { target } = e; 
        const city = target.city.value;
        setCity(city);
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a city name" className="input input-bordered w-full max-w-xs" name="city" value={city} onChange={onInputChange}  />
        <button type="submit" className="btn btn-outline btn-accent">Search</button>
    </form>
  )
}