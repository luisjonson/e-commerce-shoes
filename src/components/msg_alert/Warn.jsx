import styled from 'styled-components';
import icon_warn from '../../assets/icon-warn.svg';

const WarnStyled = styled.div`
  width: 99%;
  height: 3rem;
  background-color: #F8D7DA;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  padding-left: 1rem;
  margin: 0.5rem auto; /* <-- adiciona margem em cima e embaixo */

  & strong {
    color: #721C24;
    font-size: 1rem;
    font-weight: 500;
  }
  
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
`;

const Warn = ({ msg }) => {
  return (
    <WarnStyled>
      <img src={icon_warn} alt="Alerta" />
      <strong>{msg || "Mensagem padrão"}</strong>
    </WarnStyled>
  );
};

export default Warn;
