import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/home";
import Experience from "./pages/experience";
import Educacion from "./pages/educacion";
import Blog from "./pages/blog"; // Nueva sección de blog

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
            <Nav />
            <main className="relative">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/educacion" element={<Educacion />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path='*' element={
                        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
                            <div className="text-center max-w-2xl">
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                                    Oh vaya. ¡Lo has roto! 🫣
                                </h1>
                                <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                                    La página que buscas no existe. Parece que te has perdido en el ciberespacio.
                                </p>
                                <div className="rounded-2xl overflow-hidden shadow-2xl max-w-lg mx-auto">
                                    <img
                                        src="https://midu.dev/images/this-is-fine-404.gif"
                                        alt="404 - This is fine meme"
                                        className="w-full h-auto rounded-2xl"
                                    />
                                </div>
                                <div className="mt-8">
                                    <a
                                        href="/"
                                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                    >
                                        Volver al inicio
                                    </a>
                                </div>
                            </div>
                        </div>
                    } />
                </Routes>
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-200 dark:border-gray-800 mt-12">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <p className="text-gray-600 dark:text-gray-400">
                                © {new Date().getFullYear()} Juan José Eusebio Rodríguez. Todos los derechos reservados.
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <a href="https://github.com/AresNative" target="_blank" rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                                GitHub
                            </a>
                            <a href="https://linkedin.com/in/juan-josé-eusebi-rodriguez-a6aaa8278/" target="_blank" rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                                LinkedIn
                            </a>
                            <a href="mailto:juanerpgr@gmail.com"
                                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                                Contacto
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;