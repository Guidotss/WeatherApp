import "./estilos.css"

export const City = ({city}) => {
    console.log(city);
  return (
    <div className="containerCity">
        <h5>{city}</h5>
    </div>
  )
}