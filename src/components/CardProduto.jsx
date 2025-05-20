import styled from 'styled-components'
import Tiket_oferta from './Tiket_oferta'
const CardProduto = ({ desconto, className, image ,category ,title, price, alt}) => {

    const CardProdutoStyled = styled.div`
        border-radius: 4px;
        margin: 0;

        & .content{
            padding-top:1px;
            width: 146px;
            height: 160.5px;
            background-color: var(--white);
            display: flex;
            justify-content: center;
            align-items: center;
            
            &.content img{
                object-fit: contain;
                width: 100%;
                height: 80%;
            }
        }

        & .informacao {
            padding-left: 5px;
            margin: 0;
            margin-right: 36rem;
             word-wrap: break-word;
            & #tipo{
                margin: 0;
                color: var(--light-gray);
            }
            
            &.informacao h3{
                font-size: 12px;
                color: var(--dark-gray-2-rgba);
            }
        
            & .valor{
                /* gap: 0.5rem; */
                display: flex;
                align-items: flex-end;
                gap: 10px;
                &.valor .descoto{
                    text-decoration: line-through;
                    font-size: .80rem;
                    color: var(--light-gray);
                }
            
                &.valor .valordesconto{
                    font-size: 1rem;
                    font-weight: bold;
                    color: var(--dark-gray);
                }
            }
        }
       
    `
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
                    <p className='valordesconto'>$100</p>
                </div>
            </div>
        </CardProdutoStyled>
    )
}

export default CardProduto