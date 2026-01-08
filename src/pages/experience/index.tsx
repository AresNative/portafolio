import { useState } from "react";
import { Download, Calendar, Code, Briefcase, ChevronDown, Award, Clock, MapPin } from "lucide-react";

interface ExperienceCardProps {
    title: string;
    company: string;
    position: string;
    period: string;
    duration?: string;
    location?: string;
    description: string;
    technologies?: string[];
    achievements?: string[];
    document?: string;
    downloadUri?: string;
    download?: string;
    type?: 'full-time' | 'contract' | 'internship';
}

function ExperienceCard({
    title,
    company,
    position,
    period,
    duration,
    location,
    description,
    technologies = [],
    achievements = [],
    document,
    downloadUri,
    download,
    type = 'full-time'
}: ExperienceCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const typeConfig = {
        'full-time': {
            label: 'Tiempo Completo',
            color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700'
        },
        'contract': {
            label: 'Contrato',
            color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-700'
        },
        'internship': {
            label: 'Prácticas',
            color: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700'
        }
    };

    return (
        <div className="group relative">
            {/* Timeline connector */}
            <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-gradient-to-b from-gray-300 to-gray-300 dark:from-gray-600 dark:to-gray-600 group-last:from-gray-300 group-last:to-transparent dark:group-last:from-gray-600 dark:group-last:to-transparent ml-6"></div>

            {/* Timeline dot */}
            <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg ring-4 ring-white dark:ring-gray-900 z-10"></div>

            <div className="ml-12 bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                                <Briefcase className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    {title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{company}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 mb-3">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                                {position}
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full border ${typeConfig[type].color}`}>
                                {typeConfig[type].label}
                            </span>
                        </div>
                    </div>

                    {/* Period & Location */}
                    <div className="flex flex-col items-start lg:items-end gap-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{period}</span>
                        </div>
                        {duration && (
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <Clock className="w-4 h-4" />
                                <span>{duration}</span>
                            </div>
                        )}
                        {location && (
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <MapPin className="w-4 h-4" />
                                <span>{location}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Description */}
                <div className={`prose prose-sm dark:prose-invert max-w-none mb-4 transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
                    <p className="text-gray-700 dark:text-gray-300">
                        {description}
                    </p>
                </div>

                {/* Technologies & Achievements Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                    {/* Technologies */}
                    {technologies.length > 0 && (
                        <div>
                            <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
                                <Code className="w-4 h-4" />
                                Tecnologías
                            </h5>
                            <div className="flex flex-wrap gap-1.5">
                                {technologies.slice(0, 4).map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                {technologies.length > 4 && (
                                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs font-medium">
                                        +{technologies.length - 4}
                                    </span>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Achievements */}
                    {achievements.length > 0 && (
                        <div>
                            <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
                                <Award className="w-4 h-4" />
                                Logros
                            </h5>
                            <div className="space-y-1">
                                {achievements.slice(0, 2).map((achievement, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></div>
                                        <span className="text-xs text-gray-600 dark:text-gray-400">{achievement}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Bottom Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-4">
                        {/* Expand button */}
                        {description.length > 200 && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center gap-1"
                            >
                                {isExpanded ? "Ver menos" : "Ver más detalles"}
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                            </button>
                        )}
                    </div>

                    {/* Download Link */}
                    {downloadUri && (
                        <a
                            href={downloadUri}
                            download={download}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-sm hover:shadow-md text-sm"
                        >
                            <Download className="w-4 h-4" />
                            {document}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

function Experience() {
    const [filter, setFilter] = useState('all');
    const [sortBy, setSortBy] = useState('newest');

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="mb-12">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                                Experiencia <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Profesional</span>
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 text-lg">
                                {new Date().getFullYear() - 2019}+ años transformando ideas en soluciones digitales innovadoras
                            </p>
                        </div>

                        {/* Stats Summary */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700">
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{new Date().getFullYear() - 2019}+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Años</div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700">
                                <div className="text-2xl font-bold text-green-600 dark:text-green-400">4</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Puestos</div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700">
                                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">15+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Tecnologías</div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700">
                                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">10+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Proyectos</div>
                            </div>
                        </div>
                    </div>

                    {/* Filters & Controls */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filtrar:</span>
                            <div className="flex flex-wrap gap-2">
                                {['all', 'full-time', 'contract', 'internship'].map((filterType) => (
                                    <button
                                        key={filterType}
                                        onClick={() => setFilter(filterType)}
                                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${filter === filterType
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                            }`}
                                    >
                                        {filterType === 'all' ? 'Todos' :
                                            filterType === 'full-time' ? 'Tiempo Completo' :
                                                filterType === 'contract' ? 'Contrato' : 'Prácticas'}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Ordenar:</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="newest">Más reciente</option>
                                <option value="oldest">Más antiguo</option>
                                <option value="duration">Duración</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Experience Timeline & Sidebar */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Timeline */}
                    <div className="lg:w-2/3">
                        <div className="space-y-6">
                            {/* Lennken Group */}
                            <ExperienceCard
                                title="Lennken Group"
                                company=""
                                position="Jr. Mobile Developer"
                                period="Agosto 2021 – Mayo 2023"
                                duration="1 año 10 meses"
                                location="Remoto"
                                type="full-time"
                                description="Junto a un equipo de desarrollo me encargué de adaptar y actualizar aplicaciones para dispositivos modernos, implementando nuevas funcionalidades y mejorando la experiencia de usuario en múltiples plataformas móviles mediante el uso de tecnologías híbridas y nativas."
                                technologies={["Ionic", "Cordova", "Angular", "TypeScript", "Firebase", "Git", "Azure DevOps"]}
                                achievements={[
                                    "Reducción del 40% en tiempo de carga de aplicaciones",
                                    "Implementación exitosa de 15+ nuevas funcionalidades",
                                    "Migración de 3 aplicaciones legacy a arquitecturas modernas",
                                    "Mentoría a 2 desarrolladores junior"
                                ]}
                                document="Carta de Recomendación"
                                download="recomendacion_lennkengroup.pdf"
                                downloadUri="./documents/carta_de_recomendacion_lennkengroup.pdf"
                            />

                            {/* Momoxpam */}
                            <ExperienceCard
                                title="Momoxpam"
                                company="Startup Farmacéutica"
                                position="Sr. Mobile Developer"
                                period="Abril 2021 – Julio 2021"
                                duration="4 meses"
                                location="Remoto"
                                type="contract"
                                description="Desarrollé una aplicación que permitía el registro de inventario de medicamentos y facilitaba a los clientes realizar pedidos a domicilio. Lideré el desarrollo completo del frontend y coordiné la integración con APIs de backend para procesamiento de pagos y gestión de inventario."
                                technologies={["React Native", "Redux", "Node.js", "MongoDB", "AWS", "Stripe API"]}
                                achievements={[
                                    "Lanzamiento de aplicación en 3 meses desde cero",
                                    "Sistema de inventario en tiempo real",
                                    "Integración con pasarelas de pago",
                                    "App Store rating de 4.8/5"
                                ]}
                            />

                            {/* Factory 1 */}
                            <ExperienceCard
                                title="Factory 1"
                                company="Consultoría Tecnológica"
                                position="Jr. Web Developer"
                                period="Marzo 2019 – Diciembre 2020"
                                duration="1 año 10 meses"
                                location="Presencial"
                                type="full-time"
                                description="Me responsabilicé por el desarrollo de módulos para el control de calidad, la generación de informes de rendimiento y errores, así como la implementación de sistemas de registro y autenticación seguros para múltiples clientes empresariales."
                                technologies={["JavaScript", "PHP", "MySQL", "HTML/CSS", "Bootstrap", "REST APIs"]}
                                achievements={[
                                    "Desarrollo de 8+ módulos de control de calidad",
                                    "Automatización de reportes que ahorró 20 horas/semana",
                                    "Implementación de sistema de login seguro",
                                    "Soporte a 50+ usuarios concurrentes"
                                ]}
                                document="Carta de Recomendación"
                                download="recomendacion_factory1.pdf"
                                downloadUri="./documents/carta_de_recomendacion_factory.pdf"
                            />

                            {/* CECyTE */}
                            <ExperienceCard
                                title="CECyTE"
                                company="Concurso Estatal"
                                position="Java Developer"
                                period="Proyecto Académico"
                                duration="4 meses"
                                location="Hidalgo, México"
                                type="internship"
                                description="Mi primer proyecto profesional, desarrollado para un concurso estatal. Creamos una empresa ficticia donde me desempeñé como desarrollador principal. El sistema era un checador general para estudiantes y profesores que registraba asistencia de manera autónoma, enviaba SMS a padres confirmando la seguridad de los alumnos y gestionaba las faltas de asistencia."
                                technologies={["Java", "NetBeans", "MySQL", "SMS API", "Swing", "JDBC"]}
                                achievements={[
                                    "Ganador del 2° lugar en concurso estatal",
                                    "Sistema de notificaciones SMS en tiempo real",
                                    "Gestión completa de 500+ usuarios simulados",
                                    "Documentación técnica completa"
                                ]}
                            />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-24 space-y-6">
                            {/* Skills Overview */}
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                    <Code className="w-5 h-5 text-blue-500" />
                                    Stack Tecnológico
                                </h3>
                                <div className="space-y-3">
                                    {[
                                        { skill: 'Frontend', level: 90, color: 'bg-blue-500' },
                                        { skill: 'Mobile', level: 85, color: 'bg-purple-500' },
                                        { skill: 'Backend', level: 75, color: 'bg-green-500' },
                                        { skill: 'Bases de Datos', level: 80, color: 'bg-orange-500' },
                                        { skill: 'DevOps', level: 65, color: 'bg-red-500' }
                                    ].map((item, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-gray-600 dark:text-gray-400">{item.skill}</span>
                                                <span className="font-semibold text-gray-700 dark:text-gray-300">{item.level}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                                <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.level}%` }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Timeline Summary */}
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-5 text-white">
                                <h3 className="font-semibold text-xl mb-4">Línea de Tiempo</h3>
                                <div className="space-y-4">
                                    {[
                                        { year: '2019', label: 'Inicio profesional', color: 'bg-green-400' },
                                        { year: '2020', label: 'Desarrollo Web', color: 'bg-blue-400' },
                                        { year: '2021', label: 'Mobile Dev', color: 'bg-purple-400' },
                                        { year: '2023', label: 'Liderazgo técnico', color: 'bg-orange-400' },
                                        { year: '2024', label: 'Full-Stack', color: 'bg-red-400' }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                                            <div>
                                                <div className="font-bold">{item.year}</div>
                                                <div className="text-blue-100 text-sm">{item.label}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Download CTA */}
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">CV Completo</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                    Descarga mi curriculum detallado con todas las experiencias, tecnologías y proyectos.
                                </p>
                                <a
                                    href="./documents/curriculum_completo.pdf"
                                    download="Juan_Jose_Eusebio_Rodriguez_CV.pdf"
                                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-sm hover:shadow-md"
                                >
                                    <Download className="w-5 h-5" />
                                    Descargar CV Completo
                                </a>
                            </div>

                            {/* Key Metrics */}
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Métricas Clave</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                                        <div className="text-xs text-gray-600 dark:text-gray-400">Proyectos</div>
                                    </div>
                                    <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">100%</div>
                                        <div className="text-xs text-gray-600 dark:text-gray-400">Satisfacción</div>
                                    </div>
                                    <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">5</div>
                                        <div className="text-xs text-gray-600 dark:text-gray-400">Equipos</div>
                                    </div>
                                    <div className="text-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                                        <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">2</div>
                                        <div className="text-xs text-gray-600 dark:text-gray-400">Recomendaciones</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technologies Grid */}
                <div className="mt-16">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Tecnologías <span className="text-blue-600 dark:text-blue-400">Dominadas</span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400">Stack completo a lo largo de mi carrera</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[
                            { name: 'React', level: 'Avanzado', color: 'bg-blue-100 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700' },
                            { name: 'TypeScript', level: 'Intermedio', color: 'bg-blue-100 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700' },
                            { name: 'Ionic', level: 'Avanzado', color: 'bg-purple-100 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700' },
                            { name: 'Node.js', level: 'Intermedio', color: 'bg-green-100 dark:bg-green-900/20 border-green-200 dark:border-green-700' },
                            { name: 'Firebase', level: 'Intermedio', color: 'bg-orange-100 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700' },
                            { name: 'MongoDB', level: 'Intermedio', color: 'bg-green-100 dark:bg-green-900/20 border-green-200 dark:border-green-700' },
                            { name: 'PHP', level: 'Intermedio', color: 'bg-purple-100 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700' },
                            { name: 'Java', level: 'Intermedio', color: 'bg-red-100 dark:bg-red-900/20 border-red-200 dark:border-red-700' },
                            { name: 'MySQL', level: 'Avanzado', color: 'bg-blue-100 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700' },
                            { name: 'Git', level: 'Avanzado', color: 'bg-orange-100 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700' },
                            { name: 'AWS', level: 'Básico', color: 'bg-yellow-100 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700' },
                            { name: 'Docker', level: 'Básico', color: 'bg-blue-100 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700' }
                        ].map((tech, index) => (
                            <div
                                key={index}
                                className={`rounded-xl p-4 border ${tech.color} hover:shadow-md transition-shadow duration-200`}
                            >
                                <div className="text-center">
                                    <div className="font-semibold text-gray-900 dark:text-white mb-2">{tech.name}</div>
                                    <span className="text-xs px-2 py-1 bg-white dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">
                                        {tech.level}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Career Goals */}
                <div className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-500/30">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Objetivos <span className="text-blue-600 dark:text-blue-400">Profesionales</span>
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6">
                                Busco continuar mi crecimiento en desarrollo de software, especializándome en arquitecturas
                                escalables y liderazgo técnico. Mi objetivo es contribuir a proyectos innovadores que
                                impacten positivamente a los usuarios y empresas.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                                        <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300">Arquitectura Cloud Native</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                                        <span className="text-purple-600 dark:text-purple-400 font-bold">2</span>
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300">Liderazgo Técnico</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                                        <span className="text-green-600 dark:text-green-400 font-bold">3</span>
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300">Open Source Contributions</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="relative w-64 h-64">
                                <div className="absolute inset-0 rounded-full border-4 border-blue-200 dark:border-blue-700"></div>
                                <div className="absolute inset-4 rounded-full border-4 border-purple-200 dark:border-purple-700"></div>
                                <div className="absolute inset-8 rounded-full border-4 border-green-200 dark:border-green-700"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-gray-900 dark:text-white">+5</div>
                                        <div className="text-gray-600 dark:text-gray-400">Años de crecimiento</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;