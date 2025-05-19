import React from 'react'
import styled from 'styled-components'
import Tiket_oferta from './Tiket_oferta'
const CardProduto = ({ desconto, className }) => {

    const CardProdutoStyled = styled.div`
        width: 146px;
        height: 219.5px;
        background-color: red;
        border-radius: 4px;

        & .content{
            width: 146px;
            height: 160.5px;
            background-color: blue;

        }
    `
    return (
        <CardProdutoStyled className={className}>
            <div className='content'>
                {desconto && <Tiket_oferta valor_oferta={desconto} />}
                
            </div>
        </CardProdutoStyled>
    )
}

export default CardProduto