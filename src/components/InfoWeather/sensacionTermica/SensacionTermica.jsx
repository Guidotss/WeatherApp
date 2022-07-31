import "./estilos.css"

export const SensacionTermica = ({feels_like}) => {
    return(
        <div className="containerSesacionTermica">
            <span>
                <h5 className="Termica">Sensacion Termica: {Math.floor(feels_like)}</h5>
            </span>
        </div>
    )
}