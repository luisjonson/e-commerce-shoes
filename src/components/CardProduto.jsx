import styled from 'styled-components'
import Tiket_oferta from './Tiket_oferta'
import icon_visualizar from '../assets/visualizacao.svg'
import icon_editar from '../assets/edicao.svg'
import icon_excluir from '../assets/excluir.svg'


const CardProdutoStyled = styled.div`
    .card{
       width: 200px;
       border-radius: 4px;
       transition: transform 0.3s ease, box-shadow 0.3s ease;
       box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
       
       .content{
           width: 100%;
           height: 200px;
           background-color: var(--white);
           display: flex;
           flex-direction: column;
           padding-bottom: .3rem;
           border-top-left-radius: 4px;
           border-top-right-radius: 4px;
           img {
               /* margin: 0 auto; */
               object-fit: contain;
               width: 100%;
               height: 80%;
            }
        }
        
        .informacao {
            word-wrap: break-word;
            margin: .3rem;
            padding-bottom: .5rem;
            #tipo {
                margin: 0;
                color: var(--light-gray);
            }
            
            h3 {
                font-size: 12px;
                color: var(--dark-gray-2-rgba);
                word-wrap: break-word;
                white-space: normal;
                overflow-wrap: break-word;
            }
            
            .valor {
                display: flex;
                align-items: flex-end;
                gap: 15px;
                
                
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

        .btn-crud{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 10px;
            img {
                width: 15px;
                height: 15px;
                cursor: pointer;
                transition: transform 0.3s ease;
                margin: 5px;
            }
            
            img:hover {
                transform: scale(1.1);
            }
        }
        
    }

    .card:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
   
`;

const CardProduto = ({ desconto, image ,category ,title, price, valorComDesconto, alt}) => {
    
    return (
        <CardProdutoStyled>
            <div className='card'>
                <div className='content'>
                    {parseFloat(valorComDesconto) > 0 && ( <Tiket_oferta valor_oferta={desconto} />)}
                    <img src={image} alt={alt}></img>
                </div>
                <div className="informacao">
                    <p id='tipo'>{category}</p>
                    <h3>{title}</h3>
                    <div className='valor'>
                        {parseFloat(valorComDesconto) > 0 && (
                            <p className='descoto'>${price}</p>
                        )}
                        {parseFloat(valorComDesconto) > 0 
                        ? (<p className='valordesconto'>${valorComDesconto} </p>) 
                        : (<p className='valordesconto'>${price}</p>)}
                    </div>
                </div>
                <div className='btn-crud'>
                    <img src={icon_visualizar} />
                    <img src={icon_editar} />
                    <img src={icon_excluir} />
                </div>
            </div>
        </CardProdutoStyled>
    )
}

export default CardProduto