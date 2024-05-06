import './ButtonModal.css'

const buttonModal = ({ modal, setModal }) => {

    if (modal === true) {
        return (
            <div className='modal'>
                Esse é um modal.
                <button onClick={() => setModal(false)}>
                    Fechar Modal
                </button>
            </div>
        )
    } else {
        return null
    }
}

export default buttonModal