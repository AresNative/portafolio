import Card from "../../components/cards"
import stryle from './index.module.css'
function Experience() {
    return (
        <main className={stryle.parent}>
            <Card
                title="Lennken Group | "
                important="Jr. Mobile Developer"
                subtitle="agosto 2021 – mayo 2023 "
                text="Junto a un equipo de desarrollo me encargué de adaptar y actualizar aplicaciones para dispositivos modernos."
                document="Carta de recomendacion"
                download="recomendacio_lennkengorup.pdf"
                downloadUri="./documents/carta_de_recomendacion_lennkengroup.pdf"
            />
            <Card
                title="Momoxpam | "
                important="Sr. Mobile Developer"
                subtitle="abril 2021 – julio 2021 "
                text="Desarrollé una aplicación que permitía el registro de inventario de medicamentos y facilitaba a los clientes realizar pedidos a domicilio."
            />
            <Card
                title="Factory 1 | "
                important="Jr. Web Developer"
                subtitle="marzo 2019 – diciembre 2020 "
                text="Me responsabilicé por el desarrollo de módulos para el control de calidad, la generación de informes de rendimiento y errores, así como la implementación de sistemas de registro."
                document="Carta de recomendacion"
                download="recomendacio_factory1.pdf"
                downloadUri="./documents/carta_de_recomendacion_factory.pdf"
            />

            <Card
                title="CECyTE | "
                important="Java Developer "
                subtitle="4 meses "
                text="Este fue el primer proyecto que hice de manera 'profecional' ya que fue para un concurso a nivel estatal creando una empresa ficticia con diferentes puestos en ella, yo tomando el puesto de developer. <br />
                      Principalmente utilizamos el sistema NetBeans para la creacion del proyecto el cual era un checador general para todos los estudiantes y profesores de una escuela, el cual registraba a todos los usuarios dentro de la escuela y dentro de los salones tomando lista de manera autonoma y mandando mensajes sms a los padres de los alumnos que estan presentes para confirmar la seguridad de los mismos y marcando faltas a los que no asistian el los dias marcados."
            />
        </main>
    )
}
export default Experience