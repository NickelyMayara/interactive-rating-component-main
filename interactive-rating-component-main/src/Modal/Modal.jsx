import './Modal.css'

const Modal = ({setModal, modal}) => {
    return(
        <button className='btnEnvio' onClick={() => setModal(!modal)}>SUBMIT</button>
    )
}

export default Modal;