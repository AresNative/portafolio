
import Card from "../../components/cards"
import CardSpotify from "../../components/cards/card-spotify"
import CardClimate from "../../components/cards/card-climate"
import { SvgMail } from "../../assets/mail"
import { SvgPdf } from "../../assets/pdf"
import styles from "./index.module.css"
function Home() {
    return (
        <>
            <main className={styles.parent}>
                <section className={styles.div1}>
                    <Card
                        title="Hola! 👋 Soy Juan José"
                        important=""
                        subtitle=""
                        text="<strong>Técnico Programador</strong> con experiencia en diversas áreas. <br /> <br />  Me especializo en el desarrollo <strong>front-end</strong>, aunque también conozco tecnologías <strong>back-end</strong>, lo que me permite desempeñarme en roles <strong>full-stack</strong> sin muchas complicaciones. "
                    />
                </section>
                <section className={styles.div2}>
                    EDAD
                    <p className={styles.number}>
                        20
                    </p>
                    <strong>
                        AÑOS
                    </strong>
                </section>
                <section className={styles.div3}>
                    <a href="mailto:juanerpgr@gmail.com" target="_blank">
                        <SvgMail className={styles.fill_icon} />
                    </a>
                </section>
                <section className={styles.div4}>
                    <p>
                        Disfruto mucho del proceso de desarrollo de nuevos proyectos, desde la concepción de la idea hasta la planificación de su ejecución.
                    </p>
                </section>
                <section className={styles.div5}>
                    EXPERIENCIA
                    <div className={styles.number}>
                        4
                    </div>
                    <strong>
                        AÑOS
                    </strong>
                </section>
                <section className={styles.div6}>
                    <a href="./documents/cve.pdf" download="cve_juan_jose_eusebio_rodriguez.pdf">
                        <SvgPdf className={styles.fill_icon} />
                    </a>
                </section>
                <section className={styles.div7}>
                    <h3 className={styles.subtitle}>Front-end</h3>
                    <p>
                        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" width="40" height="40" />
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
                        </a>
                        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width="40" height="40" />
                        </a>
                        <a href="https://redux.js.org" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40" />
                        </a>
                        <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40" />
                        </a>
                        <a href="https://ionicframework.com" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ionic/ionic-original.svg" alt="ionic" width="40" height="40" />
                        </a>
                    </p>
                    <br />
                    <h3 className={styles.subtitle}>Estilos</h3>
                    <p>
                        <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css3" width="40" height="40" />
                        </a>

                        <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40" />
                        </a>

                        <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" alt="bootstrap" width="40" height="40" />
                        </a>

                        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwind" width="40" height="40" />
                        </a>
                    </p>
                    <br />
                    <h3 className={styles.subtitle}>Back-end</h3>
                    <p>
                        <a href="https://dev.java/learn/getting-started/" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40" />
                        </a>

                        <a href="https://www.php.net" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40" />
                        </a>

                        <a href="https://cordova.apache.org/" target="_blank" rel="noreferrer">
                            <img src="https://www.vectorlogo.zone/logos/apache_cordova/apache_cordova-icon.svg" alt="apachecordova" width="40" height="40" />
                        </a>

                        <a href="https://nodejs.org/es" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="nodejs" width="40" height="40" />
                        </a>

                        <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" alt="express" width="40" height="40" />
                        </a>
                    </p>
                    <br />
                    <h3 className={styles.subtitle}>Base de datos</h3>
                    <p>
                        <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
                            <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" />
                        </a>

                        <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" alt="mysql" width="40" height="40" />
                        </a>

                        <a href="https://www.microsoft.com/en-us/sql-server" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="mssql" width="40" height="40" />
                        </a>

                        <a href="https://www.sqlite.org/" target="_blank" rel="noreferrer">
                            <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite" width="40" height="40" />
                        </a>

                        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="mongodb" width="40" height="40" />
                        </a>
                    </p>
                    <br />
                    <h3 className={styles.subtitle}>Herramietnas</h3>
                    <p>
                        <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
                            <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" />
                        </a>

                        <a href="https://developer.android.com" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg" alt="android" width="40" height="40" />
                        </a>

                        <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" alt="vscode" width="40" height="40" />
                        </a>

                        <a href="https://postman.com" target="_blank" rel="noreferrer">
                            <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40" />
                        </a>

                        <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="git" width="40" height="40" />
                        </a>

                        <a href="https://github.com/" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="github" width="40" height="40" />
                        </a>

                        <a href="https://dev.azure.com/" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" alt="azure" width="40" height="40" />
                        </a>
                    </p>
                    <br />
                    <h3 className={styles.subtitle}>Tecnologias en practica</h3>
                    <p>
                        <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="c#" width="40" height="40" />
                        </a>

                        <a href="https://www.python.org" target="_blank" rel="noreferrer">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40" />
                        </a>

                    </p>
                </section>
                <section className={styles.div8}>
                    <CardSpotify />
                </section>
                <section className={styles.div9}>
                    <h2>Mis pasatiempos</h2>
                    <p>
                        Los intereses que tengo son variados, pero lo que siempre ha perdurado en mí son los videojuegos. <br /> <br /> Si desean entablar una conversación, es fácil encontrarme en las siguientes plataformas:
                    </p>
                    <a href="https://store.steampowered.com/app/108600/Project_Zomboid/" target="_blank">
                        <img src="img/download.png" alt="project zomboid" width="40" height="40" />
                    </a>
                    <a href="https://playvalorant.com/es-mx/" target="_blank">
                        <img src="img/valorant.jpg" alt="valorant" width="40" height="40" />
                    </a>

                </section>
                <section className={styles.div10}> <CardClimate /> </section>
            </main>
        </>
    )
}
export default Home