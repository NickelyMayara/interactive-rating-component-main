import Textos from '../Textos/Textos';
import React from 'react';
import Modal from '../Modal/Modal';
import ButtonModal from '../ButtonModal/ButtonModal';
import icon from '../../images/icon-star.svg'
import './Container.css'
import Classificacao from '../Classificacao/Classificacao';

const Container = () => {
    const [modal, setModal] = React.useState(false)         

    return (
        <div className='container'>
            <img src={icon} alt="#" />
            <Textos />
            <section className='botaoClass'>
                <Classificacao valor='1' />
                <Classificacao valor='2' />
                <Classificacao valor='3' />
                <Classificacao valor='4' />
                <Classificacao valor='5' />
            </section>
            <Modal setModal = { setModal }/>
            <ButtonModal modal={modal} setModal={setModal} />
        </div>

    )
}

export default Container;