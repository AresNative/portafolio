import { Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Nav from "./components/Nav";
import './App.css'
import { SvgMail } from "./assets/mail";
import { SvgPdf } from "./assets/pdf";
import { SvgSporify } from "./assets/spotify";
function Home() {
  return (
    <div className="parent-grid">
      <div className="grid-box1">
        <div className="prensent">
          <h1 className="mi">Hola! 👋 Soy Juan José</h1>
          <br />
          <p className="prensentacion">
            <strong>Tecnico Programador </strong>
            con experiencia en diversas areas, me especializo en el desarrollo <strong>front-end</strong> aunque tambien conozco tecnologias
            <strong> back-end</strong> por lo que puedo abarcar puestos <strong>full-stack</strong> sin mucha complicacion.
          </p>
        </div>
      </div>


      <div className="grid-box2">
        EDAD
        <div className="date-counter">
          <div className="number">
            20
          </div>
          <strong>
            AÑOS
          </strong>
        </div>
      </div>


      <div className="grid-box3">
        <a href="mailto:juanerpgr@gmail.com" target="_blank">
          <SvgMail className="fill-icon" />
        </a>
      </div>


      <div className="grid-box4">
        <p className="preferencias">
          Me gusta mucho el desarrollo de <strong>nuevos proyecto</strong> desde
          la creacion del <strong>concepto</strong> y la planificacion del
          <strong> funcionamiento</strong>
        </p>
      </div>


      <div className="grid-box5">
        EXPERIENCIA
        <div className="date-counter">
          <div className="number">
            4
          </div>
          <strong>
            AÑOS
          </strong>
        </div>
      </div>


      <div className="grid-box6">
        <a href="./documents/cve.pdf" download="cve_juan_jose_eusebio_rodriguez.pdf">
          <SvgPdf className='fill-icon' />
        </a>
      </div>


      <div className="grid-box7">
        <div className="box-playing">
          <div className="playing">
            <div className="greenline line-1"></div>
            <div className="greenline line-2"></div>
            <div className="greenline line-3"></div>
            <div className="greenline line-4"></div>
            <div className="greenline line-5"></div>
          </div>
        </div>
        <div className="icon-spotify">
          <SvgSporify />
        </div>
        <div className="name-music">
          <a href="https://open.spotify.com/track/2ZICF8SFI5tHttaLJKMY1X?si=02c90d36c6054cd8" target="_blank" >
            <h2>False Pretense</h2>
          </a>
        </div>
        <div className="song-time">
          <p className="timetext time_now">1:31</p>
          <div className="time">
            <div className="elapsed"></div>
          </div>
          <p className="timetext time_full">2:51</p>
        </div>
      </div>


      <div className="grid-box8">
        <h3 className="subtitle">Front-end</h3>
        <p>
          <a className="icon-tec" href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" width="40" height="40" />
          </a>
          <a className="icon-tec" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
          </a>
          <a className="icon-tec" href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width="40" height="40" />
          </a>
          <a className="icon-tec" href="https://redux.js.org" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40" />
          </a>
          <a className="icon-tec" href="https://angular.io/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg" alt="angularjs" width="40" height="40" />
          </a>
          <a className="icon-tec" href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40" />
          </a>
          <a className="icon-tec" href="https://ionicframework.com" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ionic/ionic-original.svg" alt="ionic" width="40" height="40" />
          </a>
        </p>
        <br />
        <h3 className="subtitle">Estilos</h3>
        <p>
          <a className="icon-tec" href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css3" width="40" height="40" />
          </a>
          <a className="icon-tec" href="https://sass-lang.com" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40" />
          </a>
          <a className="icon-tec" href="https://getbootstrap.com" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" alt="bootstrap" width="40" height="40" />
          </a>
          <a className="icon-tec" href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwind" width="40" height="40" />
          </a>
        </p>
        <br />
        <h3 className="subtitle">Back-end</h3>
        <p>
          <a className="icon-tec" href="https://dev.java/learn/getting-started/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40" />
          </a>
          <a className="icon-tec" href="https://www.php.net" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40" />
          </a>
          <a className="icon-tec" href="https://cordova.apache.org/" target="_blank" rel="noreferrer">
            <img src="https://www.vectorlogo.zone/logos/apache_cordova/apache_cordova-icon.svg" alt="apachecordova" width="40" height="40" />
          </a>
        </p>
        <br />
        <h3 className="subtitle">Base de datos</h3>
        <p>
          <a className="icon-tec" href="https://firebase.google.com/" target="_blank" rel="noreferrer">
            <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" />
          </a>
          <a className="icon-tec" href="https://www.mysql.com/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" alt="mysql" width="40" height="40" />
          </a>
          <a className="icon-tec" href="https://www.microsoft.com/en-us/sql-server" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="mssql" width="40" height="40" />
          </a>
          <a className="icon-tec" href="https://www.sqlite.org/" target="_blank" rel="noreferrer">
            <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite" width="40" height="40" />
          </a>
        </p>
        <br />
        <h3 className="subtitle">Herramietnas</h3>
        <p>
          <a className="icon-tec" href="https://firebase.google.com/" target="_blank" rel="noreferrer">
            <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" />
          </a>
          <a className="icon-tec" href="https://developer.android.com" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg" alt="android" width="40" height="40" />
          </a>
          <a className="icon-tec" href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" alt="vscode" width="40" height="40" />
          </a>
          <a className="icon-tec" href="https://postman.com" target="_blank" rel="noreferrer">
            <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40" />
          </a>
          <a className="icon-tec" href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="git" width="40" height="40" />
          </a>
          <a className="icon-tec" href="https://github.com/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="github" width="40" height="40" />
          </a>
          <a className="icon-tec" href="https://dev.azure.com/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" alt="azure" width="40" height="40" />
          </a>
        </p>
        <br />
        <h3 className="subtitle">Tecnologias en practica</h3>
        <p>
          <a className="icon-tec" href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="c#" width="40" height="40" />
          </a>
          <a className="icon-tec" href="https://www.python.org" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40" />
          </a>
          <a className="icon-tec" href="https://www.postgresql.org" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" alt="postgresql" width="40" height="40" />
          </a>
          <a className="icon-tec" href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="mongodb" width="40" height="40" />
          </a>

        </p>
      </div>


      <div className="grid-box9">
        <div>
          <h2>
            Mis pasatiempos
          </h2>
          <p>
            Son algo variados pero los que siempre han sido persistente son los video juegos y si <strong>gustan platicar</strong> es <strong>facil encontrarme</strong>  en los
            siguientes:
          </p>
          <a href="https://store.steampowered.com/app/108600/Project_Zomboid/" target="_blank">
            <img src="img/download.png" alt="project zomboid" />
          </a>
          <a href="https://playvalorant.com/es-mx/" target="_blank">
            <img src="img/valorant.jpg" alt="valorant" />
          </a>
        </div>
      </div>

      <div className="grid-box10">

      </div>

    </div>
  )
}
function Experience() {
  return (
    <div className="parent">
      <div className="box">
        <Card
          title="Lennken Group | "
          important="Desarrollador Movil Jr."
          subtitle="1 año 10 meses | del 17 de agosto del 2021 al 24 de mayo del 2023"
          text="
          Junto con un equipo de desarrollo actualizamos un sistema ya existente 
          para los dispositivos actuales utilizando Ionic v5 y v6 - React agregando 
          diferentes funcionalidades y preparandolos para iOS y Android.
          |salto de linea|
          Principalmente me encargue de los estilos adaptables o responsive, la 
          utilizacion de servicios API, creacion de componentes como cards | buttons 
          | inputs, la creacion de funciones para diferentes acciones como tomar fotos 
          | videos | llamadas y del manejo de consultas locales de cuestionarios registrados."
          document="Carta de recomendacion"
          download="./documents/carta_de_recomendacion_lennkengroup.pdf"
        />
      </div>
      <div className="box">
        <Card
          title="Momoxpam | "
          important="Desarrollador Movil"
          subtitle="4 meses | de abril del 2021 a julio de 2021"
          text="
          Este fue un proyecto freelance en el que cree una aplicacion para el control de productos en 
          timepo real utilizando Ionic v5 - Angular y firebase firestore.
          |salto de linea|
          El proyecto en general es para la venta a domicilio y consutla de producos almacenados en una 
          farmacia, se utiliza un sistema de escaner para registrar producto por producto o un contador 
          para agregarlos por stack, el sistema funcionando desde celulares Android, iOS y en paginas web 
          (De este no cuento con el hosting ni codigo por motivos de contrato)"
        />
      </div>
      <div className="box">
        <Card
          title="Factory 1 Group | "
          important="Programador Jr."
          subtitle="1 año | de junio del 2019 a febrero del 2020 y de noviembre del 2020 a 6 de enero 2021"
          text="
          En esta empresa inicie mis practicas profecionales aprendiendo a implementar la 
          programacion funcional dando mis primeros pasos en PHP, HTML, CSS, MySQL, JavaScript y 
          AJAX siendo considerando como pasante y luego siendo contratado en un reingreso.
          |salto de linea|
          Principalmente cree paginas web para el manejo de produccion y empaquetado, checadores, 
          consulta de datos, reporte de errores o problemas, envio de correos y administracion de tareas.
          |salto de linea|
          De igual manera aprendi el manejo de bases de datos relacionales, el manejo de usuarios, tipos 
          de datos y administracion de los mismos"
          document="Carta de recomendacion"
          download="./documents/carta_de_recomendacion_factory.pdf"
        />
      </div>
      <div className="box">
        <Card
          title="CECyTE  | "
          important="Programador Java"
          subtitle="4 meses"
          text="
          Este fue el primer proyecto que hice de manera 'profecional' ya que fue para un concurso a nivel 
          estatal creando una empresa ficticia con diferentes puestos en ella, yo tomando el puesto de developer.
          |salto de linea|
          Principalmente utilizamos el sistema NetBeans para la creacion del proyecto el cual era un checador general 
          para todos los estudiantes y profesores de una escuela, el cual registraba a todos los usuarios dentro de la 
          escuela y dentro de los salones tomando lista de manera autonoma y mandando mensajes sms a los padres de los 
          alumnos que estan presentes para confirmar la seguridad de los mismos y marcando faltas a los que no asistian 
          el los dias marcados."
        />
      </div>
    </div>
  )
}
function Educacion() {
  return (
    <div className="parent">
      <div className="box">
        <Card
          title="Universidad UTEL  | "
          important="Licenciatura en sistemas computacionales"
          subtitle="Licenciatura | La estoy cursando hasta el dia de hoy, me falta menos de un año para graduarme"
          text="
          Gracias al apoyo de Lennken Group pude seguir con mis estudios y avanzar con mi carrera, en la misma 
          he aprendido las practicas de Clean Code, analisis de datos y mejor manejo de los recursos generales de 
          los frameworks que uso dia a dia
          "
        />
      </div>
      <div className="box">
        <Card
          title="SoloLearn  | "
          important="Curso online"
          subtitle="Curso php | 3 meses"
          text="
          Principalmente tome el curso para mejorar mis practicas con el lenguaje y poder desempeñar mejor
          mi trabajo en Factory 1. Cuento con certificado del mismo curso
          "
        />
      </div>
      <div className="box">
        <Card
          title="CECyTE  | "
          important="Tecnico programador"
          subtitle="Carrera tecnica | 3 años"
          text="
          Aqui inicie mis estudios profecionales, contando con cedula profecional y titulo.
          |salto de linea|
          Gracias a mi educacion aqui aprendi a manejar la programacion orientada a objetos
          con Java, el manejo de base de datos con SqlServer"
        />
      </div>
    </div>
  )
}
function Code() {
  return (
    <div>

    </div>
  )
}
function CodeDetails() {
  return (
    <div>

    </div>
  )
}
function Test() {
  return (

    <ul className="timeline">

      <li>
        <div className="direction-r">
          <div className="flag-wrapper">
            <span className="flag">Freelancer</span>
            <span className="time-wrapper"><span className="time">2013 - present</span></span>
          </div>
          <div className="desc">My current employment. Way better than the position before!</div>
        </div>
      </li>

      <li>
        <div className="direction-l">
          <div className="flag-wrapper">
            <span className="flag">Apple Inc.</span>
            <span className="time-wrapper"><span className="time">2011 - 2013</span></span>
          </div>
          <div className="desc">My first employer. All the stuff I've learned and projects I've been working on.</div>
        </div>
      </li>

      <li>
        <div className="direction-r">
          <div className="flag-wrapper">
            <span className="flag">Harvard University</span>
            <span className="time-wrapper"><span className="time">2008 - 2011</span></span>
          </div>
          <div className="desc">A description of all the lectures and courses I have taken and my final degree?</div>
        </div>
      </li>

    </ul>
  )
}
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
      <header>
        <Nav />
        <br />
        {/* <div className="bg-animates-style">
          <BgAnimate />
        </div> */}
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/educacion" element={<Educacion />} />
        <Route path='/test' element={<Test />} />
        <Route path="/code/" element={<Code />} >
          <Route path="detailsPwa" element={<CodeDetails />} />
        </Route>
        <Route path='*' element={
          <main>
            <div className="container-main">
              <h2 className='mi'>Oh vaya. ¡Lo has roto!</h2>
              <div className="box-present">
                <img className='box' src="https://midu.dev/images/this-is-fine-404.gif" alt="404" />
              </div>
            </div>
          </main>
        } />
      </Routes>
    </div>
  )
}

export default App
