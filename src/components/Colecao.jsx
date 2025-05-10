import styled from 'styled-components';
import camisa from '../assets/camisa-colecao.svg'
import calca from '../assets/calca.svg'
import hadfone from '../assets/hadfone.svg'
import shoes from '../assets/shoes.svg'
import boner from '../assets/boner.svg'
const Colecao = () => {

  const ColecaoStaled = styled.div`
  width: 50%;
  margin: 20vh auto;

  display: flex;
  flex-direction: column;
  gap: 24px;

  & .content-header {
    display: flex;
    justify-content:center;
    align-items: center;
    width: 100%;
    padding: 0 8px;
    & .titulo {
      color: var(--dark-gray-2);
      font-weight: bold;
      font-size: 24px;
    }

    & .link {
      color: var(--gray);
      font-size: 14px;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  & .content-itens-wrapper {
    display: flex;
    flex-direction: row; /* Garante layout horizontal */
    justify-content: space-between;
    gap: 24px;
    /* overflow-x: auto;  */
    padding: 8px;
    width: 100%;
  }

  & .content-itens {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 138px;
    min-width: 104px; /* Garante que cada item tenha largura fixa */
  }

  & .itens {
    width: 104px;
    height: 104px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  }

  & img {
    width: 60%;
    height: auto;
  }

  & label {
    margin-top: 10px;
    color: var(--dark-gray-2);
  }
`;






return (
  <ColecaoStaled>
    {/* Header separado */}
    <div className="content-header">
      <span className="titulo">Coleções em destaque</span>
    </div>

    {/* Todos os itens dentro do mesmo wrapper em linha */}
    <div className="content-itens-wrapper">
      <div className="content-itens">
        <div className="itens">
          <img src={camisa} alt="Camisetas" />
        </div>
        <label>Camisetas</label>
      </div>

      <div className="content-itens">
        <div className="itens">
          <img src={calca} alt="Calças" />
        </div>
        <label>Calças</label>
      </div>

      <div className="content-itens">
        <div className="itens">
          <img src={boner} alt="Bonés" />
        </div>
        <label>Bonés</label>
      </div>

      <div className="content-itens">
        <div className="itens">
          <img src={hadfone} alt="Headphones" />
        </div>
        <label>Headphones</label>
      </div>

      <div className="content-itens">
        <div className="itens">
          <img src={shoes} alt="Tênis" />
        </div>
        <label>Tênis</label>
      </div>
    </div>
  </ColecaoStaled>
 );
}

export default Colecao