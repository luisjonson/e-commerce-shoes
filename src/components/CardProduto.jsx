import styled from 'styled-components'
import Tiket_oferta from './Tiket_oferta'

const CardProdutoStyled = styled.div`
    width: 290px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    .content{
        width: 100%;
        height: 200px;
        background-color: var(--white);
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        img {
            margin: 0 auto;
            object-fit: contain;
            width: 90%;
            height: 80%;
            padding: 10px;
        }
    }

    .informacao {
        padding: 0 5px;
        word-wrap: break-word;

        #tipo {
            margin: 0;
            color: var(--light-gray);
        }
    
        h3 {
            font-size: 12px;
            color: var(--dark-gray-2-rgba);
        }
        
        .valor {
            display: flex;
            align-items: flex-end;
            gap: 10px;
    

            .descoto {
                text-decoration: line-through;
                font-size: 0.8rem;
                color: var(--light-gray);
            }

            .valordesconto {
                font-size: 1rem;
                font-weight: bold;
                color: var(--dark-gray);
            }
        }
    }
`;

const CardProduto = ({ desconto, className, image ,category ,title, price, alt}) => {
    
    return (
        <CardProdutoStyled className={className}>
            <div className='content'>
                {desconto && <Tiket_oferta valor_oferta={desconto} />}
                <img src={image} alt={alt}></img>
            </div>
            <div className="informacao">
                <p id='tipo'>{category}</p>
                <h3>{title}</h3>
                <div className='valor'>
                    <p className='descoto'> ${price}</p>
                    <p className='valordesconto'>${price}</p>
                </div>
            </div>
        </CardProdutoStyled>
    )
}

export default CardProduto