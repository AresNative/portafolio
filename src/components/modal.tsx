import { useState } from 'react';
import SvgHamburger from '../assets/hamburger';

const Modal = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible((prevModalVisible) => !prevModalVisible);
    };

    return (
        <div>
            <input type="checkbox" id="modal-toggle" onClick={toggleModal} />
            <label className="hamburger" htmlFor="modal-toggle">
                <SvgHamburger />
            </label>
            <div id="modal" className={`modal ${modalVisible ? 'show' : ''}`}>
                <div className="modal-content">

                </div>
            </div>
        </div >
    );
};

export default Modal;