import CardTecnologias from '../components/card-tecnologias'
import Nav from '../components/nav'
import Avatar from '../components/avatar'
import './App.css'
import CodeSnippet from '../components/card-code'
function App() {
  window.addEventListener('scroll', () => {
    const menu = document.querySelector('.menu');
    if (window.pageYOffset > 0) {
      menu?.classList.add('with-border');
    } else {
      menu?.classList.remove('with-border');
    }
  });

  return (
    <div className="container-main">
      <Nav />
      <h2 className='mi'>Hola! 👋 Soy Juan José y ...</h2>
      <div className="box-present">
        <Avatar
          url='https://media.licdn.com/dms/image/D5635AQE7FORDdkyzSQ/profile-framedphoto-shrink_200_200/0/1686712320701?e=1689058800&v=beta&t=pqWoSAYE6Yh6WiOliQNrxGAJUc5uM2-NAE5sIPRrm0k'
          alt="test"
        />
        <div className='card'>
          <h2>Soy titulado Tecnico <div className="gradient-text">Programador</div> </h2>
          <p className="subtitle">
            Me considero un apasionado desarrollador <strong>front-end</strong>  aunque tambien conozco tecnologias back-end
            por lo que puedo abarcar puestos <strong>full-stack</strong> sin mucha complicacion
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
          <CodeSnippet code='npm i firebase --save' />
        </div>
        <div className="box">
          <CardTecnologias />
        </div>
      </div>

    </div>
  )
}

export default App

