
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
export function DetailsContainer({ detalles }) {

    if (!detalles || Object.keys(detalles).length === 0) {
        return
    }


    return (
        <>
            <div className='detailsDetails'>
                <h1>RECETA</h1>
                <hr className='detailsHr' />
                <h2>{detalles.receta}</h2>
                <img className='detailsrecetaImg' src={`../img/${detalles.imagen}`} />
                <p>{detalles.descripcion}</p>
            </div>

            <div className='detailsDatos'>
                <div className='box'>

                    <h3>Dificultad</h3>
                    <hr className='boxHr' />
                    <h4>{detalles.nivel}</h4>
                </div>
                <div className='box'>
                    <h3>Tiempo</h3>
                    <hr className='boxHr' />
                    <h4>{detalles.duracion}</h4>

                </div>
            </div>




            <div className="detailStep">

                <Tabs
                    defaultActiveKey="home"
                    id="uncontrolled-tab-example"
                    className=" detailsTab mb-3"
                >

                    <Tab className='tabTitulo' eventKey="home" title="Preparacion">
                        <p className='tabP'>{detalles.pasos} </p>
                    </Tab>
                    <Tab className='tabTitulo' eventKey="profile" title="Ingrediente">

                        <div className='tabGaleria'>
                            <h5>Ingredientes</h5>
                            <div className='divHr'>
                            <hr className='hrGaleria' />
                            </div>
                            <ul>
                                {detalles.ingredientes.map((ingrediente, index) => (
                                    <li key={index}>{ingrediente} </li>
                                ))}
                            </ul>
                        </div>
                    </Tab>

                </Tabs>

            </div>



        </>
    );
}



