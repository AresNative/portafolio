import { useState } from "react";
import { Link } from "react-router-dom";
import SvgDiscord from "../assets/discord";
import SvgGitHub from "../assets/github";
import SvgLinkedin from "../assets/linkedin";
import SvgHamburger from "../assets/hamburger";
import { SwitchToggle } from "./Switch-toggle";
import { Home } from "../assets/home";

function Nav() {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible((prevModalVisible) => !prevModalVisible);
    };

    return (
        <div className="menu">
            <ul>
                <li className="start">
                    <Link to="/">
                        <div className="btn"><Home className='fill-icon' /> </div>
                    </Link>
                </li>
                <li className="end icon-modal">

                    <input type="checkbox" id="modal-toggle" onClick={toggleModal} />
                    <label className="hamburger" htmlFor="modal-toggle">
                        <SvgHamburger />
                    </label>

                    <div id="modal" className={`modal ${modalVisible ? "show" : ""}`}>
                        <div className="modal-content">
                            <nav className="nav-content">
                                <Link className="btn" to="/search">
                                    Experiencia
                                </Link>
                                <Link className="btn" to="/">
                                    Proyectos
                                </Link>
                            </nav>
                            <SwitchToggle />
                            <div className="modal-redes">
                                <a href="https://discordapp.com/users/809524532091158561" target="_blank" >
                                    <SvgDiscord className="fill-icon" />
                                </a>
                                <a href="https://github.com/AresNative" target="_blank" >
                                    <SvgGitHub className="stroke-icon" />
                                </a>
                                <a href="https://www.linkedin.com/in/juan-jos%C3%A9-eusebi-rodriguez-a6aaa8278/" target="_blank" >
                                    <SvgLinkedin className="fill-icon" />
                                </a>
                            </div>
                        </div>
                    </div>

                </li>
                <div className="menue-no-modal">
                    <li>
                        <Link className="btn" to="/experience">
                            Experiencia
                        </Link>
                    </li>
                    <li>
                        <Link className="btn" to="/educacion">
                            Educacion
                        </Link>
                    </li>
                    <li>
                        <Link className="btn" to="/code">
                            Code
                        </Link>
                    </li>
                    <li className="end">
                        <a href="https://discordapp.com/users/809524532091158561" target="_blank" >
                            <SvgDiscord className="fill-icon" />
                        </a>
                    </li>
                    <li className="end">
                        <a href="https://github.com/AresNative" target="_blank" >
                            <SvgGitHub className="stroke-icon" />
                        </a>
                    </li>
                    <li className="end">
                        <a href="https://www.linkedin.com/in/juan-jos%C3%A9-eusebi-rodriguez-a6aaa8278/" target="_blank" >
                            <SvgLinkedin className="fill-icon" />
                        </a>
                    </li>
                    <li className="end hr">
                        <hr />
                    </li>
                    <li className="end">
                        <SwitchToggle />
                    </li>
                    <li className="end hr">
                        <hr />
                    </li>
                </div>
            </ul>
        </div>
    );
}

export default Nav;
