import "./estilos.css"

export const MainTemp = ({temp}) => {
  return (
    <div>
        <h1>{Math.floor(temp)}°C</h1>
    </div>
  )
}