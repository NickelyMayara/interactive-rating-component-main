import './Classificacao.css'
import React from 'react';

// eslint-disable-next-line react/prop-types
const Classificacao = ({valor}) => {

    const [ativo, setAtivo] = React.useState(false)
    const background = ativo === true ? 'hsl(217, 12%, 63%)' : 'hsl(216, 12%, 20%)'

    return (
        <button className='btnClassificacao' style={{backgroundColor : background}} onClick={() => setAtivo(!ativo)}>{valor}</button>
            
    )
}

export default Classificacao;