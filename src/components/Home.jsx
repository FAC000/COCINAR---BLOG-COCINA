import { ApartadoHome } from "./ApartadoHome"
import { UncontrolledExample } from "./Carrusel"
import { RecetasSelectas } from "./RecetasSelectas"
import { Titutlo } from "./Titutlo"



export const Home = () => {

    return (
        <div >
            <UncontrolledExample />  
            <Titutlo/>
            <RecetasSelectas/>
            <ApartadoHome/>
        </div>
    )
}

