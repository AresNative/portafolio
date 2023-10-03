import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/home";
import Experience from "./pages/experience";
import Educacion from "./pages/educacion";
import Code from "./pages/code";
import CodeDetails from "./pages/code/details-code";

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
        <>
            <header>
                <Nav />
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/educacion" element={<Educacion />} />
                <Route path="/code/" element={<Code />} >
                    <Route path="detailsPwa" element={<CodeDetails />} />
                </Route>
                <Route path='*' element={
                    <main className="parent">
                        <div>
                            <h1 className='mi'>Oh vaya. ¡Lo has roto!</h1>
                            <div>
                                <img src="https://midu.dev/images/this-is-fine-404.gif" alt="404" />
                            </div>
                        </div>
                    </main>
                } />
            </Routes>
        </>
    )
}

export default App