
import { SvgMail } from "../../assets/mail";
import { SvgPdf } from "../../assets/pdf";
import { useEffect, useState } from "react";

// Función para calcular edad dinámica
function calculateAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

// Función para calcular experiencia dinámica
function calculateExperience(startDate: Date): number {
    const today = new Date();
    let years = today.getFullYear() - startDate.getFullYear();
    const monthDiff = today.getMonth() - startDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < startDate.getDate())) {
        years--;
    }

    return years;
}

function Home() {
    const [age, setAge] = useState<number>(0);
    const [experience, setExperience] = useState<number>(0);

    useEffect(() => {
        const birthDate = new Date(2002, 11, 20); // Diciembre 20, 2002 (mes 0-indexed)
        const startDate = new Date(2019, 2, 1); // Marzo 1, 2019

        setAge(calculateAge(birthDate));
        setExperience(calculateExperience(startDate));
    }, []);

    return (
        <>
            <main className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-black p-4">
                <div className="max-w-7xl mx-auto">
                    {/* Grid Container */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-auto">

                        {/* Tarjeta Principal - Ocupa 2 columnas en desktop */}
                        <section className="lg:col-span-2 lg:row-span-2">
                            <div className="bg-gradient-to-br from-indigo-900/80 to-purple-900/80 rounded-3xl p-8 h-full backdrop-blur-sm border border-white/10 shadow-2xl">
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                                    <div className="w-48 h-48 rounded-3xl overflow-hidden border-4 border-white/20 shadow-xl flex-shrink-0">
                                        <img
                                            src="https://media.licdn.com/dms/image/v2/D5603AQGGzqcueOlodQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1686712320092?e=1769644800&v=beta&t=YRxuWeKeQ2N8nD4reYi7vTM5QFsGj_7q3mZE6rayofY"
                                            alt="Juan José"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                            Hola! 👋 Soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Juan José</span>
                                        </h1>
                                        <div className="prose prose-lg max-w-none">
                                            <p className="text-gray-200 text-lg leading-relaxed">
                                                <span className="text-cyan-300 font-semibold">Técnico Programador</span> con experiencia en diversas áreas.
                                            </p>
                                            <p className="text-gray-200 text-lg leading-relaxed mt-4">
                                                Me especializo en el desarrollo <span className="text-purple-300 font-semibold">front-end</span>, aunque también conozco tecnologías <span className="text-pink-300 font-semibold">back-end</span>, lo que me permite desempeñarme en roles <span className="text-yellow-300 font-semibold">full-stack</span> sin muchas complicaciones.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Tarjeta de Edad */}
                        <section className="group">
                            <div className="bg-gradient-to-br from-red-500/90 to-pink-600/90 rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center backdrop-blur-sm border border-white/10 shadow-xl hover:scale-[1.02] transition-transform duration-300">
                                <h3 className="text-white/90 text-lg font-semibold mb-2 tracking-wider">EDAD</h3>
                                <div className="text-white text-7xl md:text-8xl font-bold mb-2 drop-shadow-lg">
                                    {age}
                                </div>
                                <div className="text-white/80 font-bold text-lg tracking-wider">
                                    AÑOS
                                </div>
                            </div>
                        </section>

                        {/* Tarjeta de Email */}
                        <section className="group">
                            <a href="mailto:juanerpgr@gmail.com" target="_blank" className="block h-full">
                                <div className="bg-gradient-to-br from-blue-500/90 to-cyan-600/90 rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center backdrop-blur-sm border border-white/10 shadow-xl hover:scale-[1.02] hover:rotate-[-2deg] transition-all duration-300">
                                    <SvgMail className="w-40 h-40 fill-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                                    <p className="text-white font-semibold mt-4 text-lg">Contáctame</p>
                                </div>
                            </a>
                        </section>

                        {/* Tarjeta de Pasión */}
                        <section className="lg:col-span-2">
                            <div
                                className="relative rounded-3xl overflow-hidden h-full min-h-[200px] border border-white/10 shadow-xl group"
                                style={{
                                    backgroundImage: `url('/img/coding.gif')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm group-hover:bg-black/70 transition-all duration-300" />
                                <div className="relative z-10 p-8 h-full flex items-center">
                                    <p className="text-white text-xl md:text-2xl font-medium leading-relaxed">
                                        Disfruto mucho del proceso de desarrollo de nuevos proyectos, desde la concepción de la idea hasta la planificación de su ejecución.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Tarjeta de Experiencia */}
                        <section className="group">
                            <div className="bg-gradient-to-br from-red-500/90 to-pink-600/90 rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center backdrop-blur-sm border border-white/10 shadow-xl hover:scale-[1.02] transition-transform duration-300">
                                <h3 className="text-white/90 text-lg font-semibold mb-2 tracking-wider">EXPERIENCIA</h3>
                                <div className="text-white text-7xl md:text-8xl font-bold mb-2 drop-shadow-lg">
                                    {experience}
                                </div>
                                <div className="text-white/80 font-bold text-lg tracking-wider">
                                    AÑOS
                                </div>
                            </div>
                        </section>

                        {/* Tarjeta de CV */}
                        <section className="group">
                            <a href="./documents/cve.pdf" download="cve_juan_jose_eusebio_rodriguez.pdf" className="block h-full">
                                <div className="bg-gradient-to-br from-blue-500/90 to-cyan-600/90 rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center backdrop-blur-sm border border-white/10 shadow-xl hover:scale-[1.02] hover:rotate-[-2deg] transition-all duration-300">
                                    <SvgPdf className="w-40 h-40 fill-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                                    <p className="text-white font-semibold mt-4 text-lg">Descargar CV</p>
                                </div>
                            </a>
                        </section>

                        {/* Tarjeta de Tecnologías */}
                        <section className="lg:col-span-2">
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-xl">
                                <h2 className="text-3xl font-bold text-white mb-8 text-center">Stack Tecnológico</h2>

                                <div className="space-y-8">
                                    {/* Front-end */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center">
                                            <span className="w-3 h-3 bg-cyan-400 rounded-full mr-2"></span>
                                            Front-end
                                        </h3>
                                        <div className="flex flex-wrap gap-4">
                                            {['html5', 'javascript', 'react', 'redux', 'typescript', 'ionic'].map((tech) => (
                                                <TechIcon key={tech} name={tech} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Estilos */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center">
                                            <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
                                            Estilos
                                        </h3>
                                        <div className="flex flex-wrap gap-4">
                                            {['css3', 'sass', 'bootstrap', 'tailwindcss'].map((tech) => (
                                                <TechIcon key={tech} name={tech} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Back-end */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-pink-300 mb-4 flex items-center">
                                            <span className="w-3 h-3 bg-pink-400 rounded-full mr-2"></span>
                                            Back-end
                                        </h3>
                                        <div className="flex flex-wrap gap-4">
                                            {['java', 'php', 'apachecordova', 'nodejs', 'express'].map((tech) => (
                                                <TechIcon key={tech} name={tech} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Base de datos */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center">
                                            <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                                            Base de datos
                                        </h3>
                                        <div className="flex flex-wrap gap-4">
                                            {['firebase', 'mysql', 'microsoftsqlserver', 'sqlite', 'mongodb'].map((tech) => (
                                                <TechIcon key={tech} name={tech} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Herramientas */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-green-300 mb-4 flex items-center">
                                            <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                                            Herramientas
                                        </h3>
                                        <div className="flex flex-wrap gap-4">
                                            {['android', 'vscode', 'postman', 'git', 'github', 'azure'].map((tech) => (
                                                <TechIcon key={tech} name={tech} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Tecnologías en práctica */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-orange-300 mb-4 flex items-center">
                                            <span className="w-3 h-3 bg-orange-400 rounded-full mr-2"></span>
                                            Tecnologías en práctica
                                        </h3>
                                        <div className="flex flex-wrap gap-4">
                                            {['csharp', 'python'].map((tech) => (
                                                <TechIcon key={tech} name={tech} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
}

// Componente auxiliar para iconos de tecnología
function TechIcon({ name }: { name: string }) {
    const techInfo: Record<string, { url: string; label: string }> = {
        html5: { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", label: "HTML5" },
        javascript: { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", label: "JavaScript" },
        react: { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", label: "React" },
        redux: { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg", label: "Redux" },
        typescript: { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", label: "TypeScript" },
        ionic: { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ionic/ionic-original.svg", label: "Ionic" },
        css3: { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg", label: "CSS3" },
        sass: { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg", label: "Sass" },
        bootstrap: { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg", label: "Bootstrap" },
        tailwindcss: { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", label: "Tailwind CSS" },
        java: { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", label: "Java" },
        php: { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg", label: "PHP" },
        apachecordova: { url: "https://www.vectorlogo.zone/logos/apache_cordova/apache_cordova-icon.svg", label: "Apache Cordova" },
        nodejs: { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", label: "Node.js" },
        express: { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg", label: "Express" },
        firebase: { url: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg", label: "Firebase" },
        mysql: { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg", label: "MySQL" },
        microsoftsqlserver: { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", label: "SQL Server" },
        sqlite: { url: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg", label: "SQLite" },
        mongodb: { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg", label: "MongoDB" },
        android: { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg", label: "Android" },
        vscode: { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg", label: "VS Code" },
        postman: { url: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", label: "Postman" },
        git: { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg", label: "Git" },
        github: { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg", label: "GitHub" },
        azure: { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg", label: "Azure" },
        csharp: { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg", label: "C#" },
        python: { url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", label: "Python" }
    };

    const info = techInfo[name] || { url: "", label: name };

    return (
        <a
            href="#"
            className="group relative"
            title={info.label}
        >
            <div className="w-16 h-16 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <img
                    src={info.url}
                    alt={info.label}
                    className="w-10 h-10 object-contain filter group-hover:brightness-125 transition-all duration-300"
                />
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/90 px-3 py-1 rounded-full text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                {info.label}
            </div>
        </a>
    );
}

export default Home;