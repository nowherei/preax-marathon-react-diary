import { posts } from "./data";
import dateFormatter from "./utils/dateFormatter";

const Modal = ({ modalId, setModalId }) => {

    const currentModal = posts[modalId-1];

    const modalText = currentModal.description;
    const modalHeader = currentModal.title;
    const modalDate = dateFormatter(currentModal.date, "modal");
    const modalSmile = currentModal.mood;
    const modalImg = currentModal.img

    return (
        <div className="modal-wrapper">
            <div className="modal-content">
                <button onClick={() => { setModalId(null) }} className="modal-close">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.22517 0.811082C1.83465 0.420557 1.20148 0.420557 0.81096 0.811082C0.420435 1.20161 0.420435 1.83477 0.81096 2.2253L6.58569 8.00003L0.811019 13.7747C0.420495 14.1652 0.420495 14.7984 0.811019 15.1889C1.20154 15.5794 1.83471 15.5794 2.22523 15.1889L7.99991 9.41424L13.7746 15.1889C14.1651 15.5794 14.7983 15.5794 15.1888 15.1889C15.5793 14.7984 15.5793 14.1652 15.1888 13.7747L9.41412 8.00003L15.1889 2.2253C15.5794 1.83477 15.5794 1.20161 15.1889 0.811082C14.7983 0.420557 14.1652 0.420557 13.7746 0.811082L7.99991 6.58582L2.22517 0.811082Z" fill="black" />
                </svg>
                </button>
                <div className="modal-header">
                    <span className="modal-header-caption">
                        <span className="modal-header-smile">{modalSmile}</span> {modalHeader}</span>
                    <span className="modal-header-date">{modalDate}</span>
                </div>
                <div className="modal-body">
                    {/* <img className="modal-body-img" alt="modal-big img" src="https://images.pexels.com/photos/3839336/pexels-photo-3839336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
                    <img className="mobile-modal-img hide" alt="modal-mini-img" src="https://images.pexels.com/photos/1183021/pexels-photo-1183021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img> */}
                    <img src={modalImg}/>
                    <div className="mobile-modal-body hide">{modalSmile}  {modalHeader} <span className="modal-header-date">{modalDate}</span></div>
                    <span className="modal-body-text">{modalText}</span>
                </div>
            </div>
        </div>
    );
}

export default Modal;