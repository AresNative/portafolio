import Card from "../../components/card"
import Nav from "../../components/nav"

function Experience() {
    return (
        <div className="container-main">
            <Nav />
            <h2 className='mi'></h2>
            <div className="box-present">
                <div className="box">
                    <Card
                        title="Titulado Tecnico"
                        important="Programador"
                        subtitle="Me considero un apasionado desarrollador <strong>front-end</strong>  aunque tambien conozco tecnologias back-end
                            por lo que puedo abarcar puestos <strong>full-stack</strong> sin mucha complicacion"

                        text="Me gusta desarrollar en React y actualmente estoy desarrollando aplicaciones hibridas (Android / iOS) en Ionic, también conozco
                    lenguajes como:
                    PHP y Java, manejo bases de datos relacionales como SQL y no relacionales como firestore de Firebase sin contar otros frameworks
                    de JavaScript como Angular. .

                    Tengo 4 años de experiencia en la creacion de diversos sistemas y actualmente estoy cursando la Universidad ademas por mi cuenta
                    estudio diversas tecnologias con Python para mejorar mis capacidades y entendimiento de los sistemas"
                    />
                </div>
            </div>

        </div>
    )
}
export default Experience