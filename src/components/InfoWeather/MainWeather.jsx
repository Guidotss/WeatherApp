import { MainTemp } from "./mainTemp/mainTemp";
import { SensacionTermica } from "./sensacionTermica/SensacionTermica";
import "./estilos.css";
import { City } from "./city/City";

export const MainWeather = ({data,loading}) => {
    if(data == undefined){
        return; 
    }
    const { main } = data; 

    if(main == undefined){
        return; 
    }
    const { temp, feels_like, temp_min, temp_max, humidity } = main;
    const {name} = data;
    console.log(data);

    return(
        <div className="mainTemp">
            <City city={name}/>
            <MainTemp temp={temp}/>
            <SensacionTermica feels_like={feels_like}/>
        </div>
    )
}