
import Card from '../../components/cards'
import stryle from './index.module.css'
function Educacion() {
    return (
        <main className={stryle.parent}>
            <Card
                title="UTEL | "
                important="Licenciatura en sistemas computacionales "
                subtitle="Universidad "
                text="Estoy cursando mi carrera universitaria y me encuentro en la etapa final, a punto de graduarme."
            />
            <Card
                title="SoloLearn | "
                important="PHP "
                subtitle="Certificacion online "
                text="Principalmente tome el curso para mejorar mis practicas con el lenguaje y poder desempeñar mejor mi trabajo en Factory 1. Cuento con certificado del mismo curso"
            />
            <Card
                title="CECyTE | "
                important="Tecnico programador "
                subtitle="Preparatoria "
                text="Aqui inicie mis estudios profecionales, contando con cedula profecional y titulo.
                      Gracias a mi educacion aqui aprendi a manejar la programacion orientada a objetos con Java y el manejo de base de datos con SqlServer"
            />
        </main>
    )
}
export default Educacion