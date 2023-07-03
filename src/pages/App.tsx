import CardTecnologias from '../components/card-tecnologias'
import Nav from '../components/nav'
import Avatar from '../components/avatar'
/* import TestComponent from '../components/test' */
import './App.css'
function App() {

  return (
    <div className="container-main">
      <Nav />
      <h2 className='mi'>Hola! 👋 Soy Juan José y ...</h2>
      <div className="box-present">
        <Avatar
          url='https://media.licdn.com/dms/image/D5635AQE7FORDdkyzSQ/profile-framedphoto-shrink_200_200/0/1686712320701?e=1688407200&v=beta&t=Or5U667sOoLO05TLtdidLwrY44S9skgl1VNc5q75I-4'
          alt="test"
        />
        <div className='card'>
          <h2>Soy titulado Tecnico <div className="gradient-text">Programador</div> </h2>
          <p className="subtitle">
            Me considero un apasionado desarrollador <strong>front-end</strong>  aunque tambien conozco tecnologias back-end
            por lo que puedo abarcar puestos full-stack sin mucha complicacion
          </p>
          <br />
          <p>
            Me gusta desarrollar en React y actualmente estoy desarrollando aplicaciones hibridas (Android / iOS) en Ionic, también conozco
            lenguajes como:
            PHP y Java, manejo bases de datos relacionales como SQL y no relacionales como firestore de Firebase sin contar otros frameworks de JavaScript como Angular.
          </p>
          <br />
          <p>
            Tengo 4 años de experiencia en la creacion de diversos sistemas y actualmente estoy cursando la Universidad ademas por mi cuenta estudio diversas tecnologias con Python
          </p>
        </div>
      </div>
      <div className="parent">

        <div className="box">
          <CardTecnologias />
        </div>
        <div className="box">
          <CardTecnologias />
          {/* <TestComponent /> */}
        </div>
        <div className="box">
          <CardTecnologias />
          {/* <TestComponent /> */}
        </div>
      </div>

    </div>
  )
}

export default App

