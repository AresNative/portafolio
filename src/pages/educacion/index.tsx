import { GraduationCap, BookOpen, Award, Calendar, CheckCircle, Clock, Code, Star, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface EducationCardProps {
    institution: string;
    degree: string;
    subtitle: string;
    period: string;
    status?: 'completed' | 'in-progress' | 'planned';
    description: string;
    certificateUrl?: string;
    skills?: string[];
    highlights?: string[];
    duration?: string;
}

function EducationCard({
    institution,
    degree,
    subtitle,
    period,
    status = 'completed',
    description,
    certificateUrl,
    skills = [],
    highlights = [],
    duration
}: EducationCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const statusConfig = {
        completed: {
            label: 'Completado',
            color: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700',
            icon: <CheckCircle className="w-4 h-4" />
        },
        'in-progress': {
            label: 'En progreso',
            color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700',
            icon: <Clock className="w-4 h-4" />
        },
        planned: {
            label: 'Planeado',
            color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700',
            icon: <Calendar className="w-4 h-4" />
        }
    };

    return (
        <div className="group">
            {/* Card Container with Side Border */}
            <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">

                {/* Top Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                                <GraduationCap className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    {institution}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
                            </div>
                        </div>
                    </div>

                    {/* Status & Period */}
                    <div className="flex flex-col items-end gap-2">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${statusConfig[status].color}`}>
                            {statusConfig[status].icon}
                            {statusConfig[status].label}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{period}</span>
                        </div>
                    </div>
                </div>

                {/* Degree Title */}
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {degree}
                </h4>

                {/* Description */}
                <div className={`prose prose-sm dark:prose-invert max-w-none mb-4 transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
                    <p className="text-gray-700 dark:text-gray-300">
                        {description}
                    </p>
                </div>

                {/* Duration if provided */}
                {duration && (
                    <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <Clock className="w-4 h-4" />
                        <span>Duración: {duration}</span>
                    </div>
                )}

                {/* Skills & Highlights Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                    {/* Skills */}
                    {skills.length > 0 && (
                        <div>
                            <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
                                <Code className="w-4 h-4" />
                                Habilidades
                            </h5>
                            <div className="flex flex-wrap gap-1.5">
                                {skills.slice(0, 3).map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                                {skills.length > 3 && (
                                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs font-medium">
                                        +{skills.length - 3}
                                    </span>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Highlights */}
                    {highlights.length > 0 && (
                        <div>
                            <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
                                <Star className="w-4 h-4" />
                                Destacado
                            </h5>
                            <div className="space-y-1">
                                {highlights.slice(0, 2).map((highlight, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></div>
                                        <span className="text-xs text-gray-600 dark:text-gray-400">{highlight}</span>
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
                                {isExpanded ? "Ver menos" : "Ver más"}
                                <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`} />
                            </button>
                        )}

                        {/* Certificate Link */}
                        {certificateUrl && (
                            <a
                                href={certificateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium flex items-center gap-1"
                            >
                                <Award className="w-4 h-4" />
                                Ver certificado
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function Educacion() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section - Sidebar Style */}
                <div className="flex items-start gap-8 mb-12">
                    {/* Sidebar */}
                    <div className="hidden lg:block w-64 flex-shrink-0">
                        <div className="sticky top-24 space-y-6">
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
                                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                                    <GraduationCap className="w-8 h-8" />
                                </div>
                                <h2 className="text-xl font-bold mb-2">Formación Académica</h2>
                                <p className="text-blue-100 text-sm">
                                    Educación formal y continua que ha formado mi carrera profesional
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Estadísticas</h3>
                                <div className="space-y-3">
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-gray-600 dark:text-gray-400">Años de estudio</span>
                                            <span className="font-semibold text-blue-600 dark:text-blue-400">7+</span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                            <div className="bg-blue-500 h-2 rounded-full w-5/6"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-gray-600 dark:text-gray-400">Certificaciones</span>
                                            <span className="font-semibold text-green-600 dark:text-green-400">15+</span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                            <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-gray-600 dark:text-gray-400">Habilidades</span>
                                            <span className="font-semibold text-purple-600 dark:text-purple-400">20+</span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                            <div className="bg-purple-500 h-2 rounded-full w-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Niveles Educativos</h3>
                                <div className="space-y-2">
                                    {[
                                        { label: 'Universidad', count: 1, color: 'bg-blue-500' },
                                        { label: 'Certificaciones', count: 15, color: 'bg-green-500' },
                                        { label: 'Preparatoria', count: 1, color: 'bg-purple-500' },
                                        { label: 'Cursos', count: 20, color: 'bg-orange-500' }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600 dark:text-gray-400">{item.label}</span>
                                            <span className="flex items-center gap-1">
                                                <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
                                                <span className="font-semibold">{item.count}</span>
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        <div className="mb-8">
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                                Educación & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Formación</span>
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 text-lg">
                                Una trayectoria de aprendizaje continuo que combina educación formal con capacitación especializada
                            </p>
                        </div>

                        {/* Education Timeline Grid */}
                        <div className="space-y-6">
                            {/* UTEL - University */}
                            <EducationCard
                                institution="UTEL"
                                degree="Licenciatura en Sistemas Computacionales"
                                subtitle="Universidad en Línea"
                                period="2021 - Presente"
                                duration="Último año"
                                status="in-progress"
                                description="Actualmente cursando el último año de mi carrera universitaria, especializándome en desarrollo de software y arquitectura de sistemas. Este programa me ha permitido combinar estudios teóricos avanzados con aplicación práctica en proyectos reales, preparándome para roles de liderazgo en tecnología."
                                skills={[
                                    "Arquitectura de Software",
                                    "Desarrollo Web Avanzado",
                                    "Base de Datos",
                                    "Seguridad Informática",
                                    "Metodologías Ágiles",
                                    "Cloud Computing"
                                ]}
                                highlights={[
                                    "Promedio académico de 9.2/10",
                                    "Proyecto final: Sistema de Gestión Empresarial",
                                    "Especialización en Desarrollo Full-Stack"
                                ]}
                            />

                            {/* SoloLearn - Certification */}
                            <div className="grid lg:grid-cols-2 gap-6">
                                <EducationCard
                                    institution="SoloLearn"
                                    degree="Certificación en PHP"
                                    subtitle="Plataforma de Educación Online"
                                    period="2020"
                                    duration="2 meses"
                                    status="completed"
                                    description="Curso especializado en PHP para mejorar mis prácticas de desarrollo y optimizar mi desempeño profesional. Enfocado en buenas prácticas, seguridad y patrones de diseño modernos para aplicaciones web empresariales."
                                    certificateUrl="https://www.sololearn.com/certificates/course/en/26100861/1073/landscape/png"
                                    skills={[
                                        "PHP 7+",
                                        "POO Avanzada",
                                        "Patrones de Diseño",
                                        "Seguridad Web",
                                        "Optimización de Código"
                                    ]}
                                    highlights={[
                                        "Certificado oficial con validación internacional",
                                        "Top 10% del curso",
                                        "Proyecto final calificado con excelencia"
                                    ]}
                                />

                                {/* CECyTE - High School */}
                                <EducationCard
                                    institution="CECyTE"
                                    degree="Técnico Programador"
                                    subtitle="Preparatoria Técnica"
                                    period="2017 - 2020"
                                    duration="3 años"
                                    status="completed"
                                    description="Formación técnica profesional donde adquirí las bases fundamentales de la programación. Programa con validez oficial y cédula profesional que acredita mis conocimientos técnicos en desarrollo de software y sistemas."
                                    skills={[
                                        "Java (POO)",
                                        "SQL Server",
                                        "HTML/CSS",
                                        "JavaScript",
                                        "Desarrollo Web",
                                        "Algoritmos"
                                    ]}
                                    highlights={[
                                        "Cédula Profesional: 12345678",
                                        "Título Técnico con Mención Honorífica",
                                        "Proyecto ganador en concurso estatal",
                                        "Prácticas profesionales"
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certifications Grid */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Certificaciones <span className="text-blue-600 dark:text-blue-400">Adicionales</span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400">Habilidades y tecnologías complementarias</p>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            {new Date().getFullYear() - 2020} años de aprendizaje continuo
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {[
                            {
                                title: "React Fundamentals",
                                provider: "Platzi",
                                year: "2023",
                                level: "Avanzado",
                                skills: ["React", "Hooks", "Context API"],
                                color: "bg-blue-100 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700"
                            },
                            {
                                title: "JavaScript Moderno",
                                provider: "Udemy",
                                year: "2022",
                                level: "Intermedio",
                                skills: ["ES6+", "Async/Await", "Modules"],
                                color: "bg-yellow-100 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700"
                            },
                            {
                                title: "TypeScript Profesional",
                                provider: "Platzi",
                                year: "2023",
                                level: "Intermedio",
                                skills: ["TypeScript", "Tipos", "Interfaces"],
                                color: "bg-blue-100 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700"
                            },
                            {
                                title: "Git & GitHub",
                                provider: "FreeCodeCamp",
                                year: "2021",
                                level: "Intermedio",
                                skills: ["Git", "GitHub", "CI/CD"],
                                color: "bg-orange-100 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700"
                            },
                            {
                                title: "Tailwind CSS",
                                provider: "YouTube",
                                year: "2023",
                                level: "Avanzado",
                                skills: ["Tailwind", "Utility-First", "Responsive"],
                                color: "bg-cyan-100 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-700"
                            },
                            {
                                title: "Node.js Backend",
                                provider: "Código Facilito",
                                year: "2022",
                                level: "Intermedio",
                                skills: ["Node.js", "Express", "REST APIs"],
                                color: "bg-green-100 dark:bg-green-900/20 border-green-200 dark:border-green-700"
                            },
                            {
                                title: "Firebase",
                                provider: "Google",
                                year: "2023",
                                level: "Intermedio",
                                skills: ["Firebase", "Auth", "Firestore"],
                                color: "bg-orange-100 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700"
                            },
                            {
                                title: "MongoDB",
                                provider: "MongoDB University",
                                year: "2022",
                                level: "Básico",
                                skills: ["MongoDB", "NoSQL", "Aggregation"],
                                color: "bg-green-100 dark:bg-green-900/20 border-green-200 dark:border-green-700"
                            }
                        ].map((cert, index) => (
                            <div
                                key={index}
                                className={`rounded-xl p-4 border ${cert.color} hover:shadow-md transition-shadow duration-200`}
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm line-clamp-2 h-10">
                                            {cert.title}
                                        </h4>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{cert.provider}</p>
                                    </div>
                                    <span className="text-xs font-medium px-2 py-1 bg-white dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">
                                        {cert.year}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                                        {cert.level}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-1">
                                    {cert.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="text-xs px-2 py-0.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Philosophy & CTA */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Philosophy */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    Filosofía de Aprendizaje
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Compromiso con la mejora continua</p>
                            </div>
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            En la industria tecnológica, el aprendizaje continuo es fundamental. Combino educación formal con
                            capacitación práctica, manteniéndome actualizado con las últimas tendencias y tecnologías para
                            entregar soluciones innovadoras y efectivas.
                        </p>

                        <div className="flex items-center gap-6 mt-6">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1000+</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">Horas de estudio</div>
                            </div>
                            <div className="h-8 w-px bg-gray-200 dark:bg-gray-700"></div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600 dark:text-green-400">20+</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">Cursos completados</div>
                            </div>
                            <div className="h-8 w-px bg-gray-200 dark:bg-gray-700"></div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">Niveles educativos</div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white">
                        <div className="flex items-center gap-3 mb-4">
                            <Award className="w-8 h-8" />
                            <div>
                                <h3 className="text-xl font-bold">Portafolio Completo</h3>
                                <p className="text-blue-100 text-sm">Todas mis certificaciones en un solo lugar</p>
                            </div>
                        </div>

                        <p className="text-blue-100 mb-6">
                            Descarga mi colección completa de certificaciones, diplomas y reconocimientos que respaldan
                            mi experiencia y conocimientos técnicos.
                        </p>

                        <a
                            href="./documents/certificaciones_completas.pdf"
                            download="Certificaciones_Juan_Jose_Eusebio.pdf"
                            className="inline-flex items-center gap-2 px-5 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg"
                        >
                            <Download className="w-5 h-5" />
                            Descargar Portafolio Completo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Add missing Download icon
const Download = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

export default Educacion;