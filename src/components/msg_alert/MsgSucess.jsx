import styled from 'styled-components';
import iconSucess from '../../assets/icon_sucess.svg';
import { useEffect, useState } from "react";

const MsgSucessStyled = styled.div`
  width: 99%;
  height: 3rem;
  background-color:#d6fbe6;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  padding-left: 1rem;
  margin: 0.5rem auto; /* <-- adiciona margem em cima e embaixo */

  & strong {
    color:   #136c3f;
    font-size: 1rem;
    font-weight: 500;
  }
  
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
`;

const MsgSucess = ({ msg , tempo = 10000}) => {
   const [visivel, setVisivel] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisivel(false);
    }, tempo);

    return () => clearTimeout(timer);
  }, [tempo]);

  if (!visivel) return null;

  return (
    <MsgSucessStyled >
      <img src={iconSucess} alt="Alerta" />
      <strong>{msg}</strong>
    </MsgSucessStyled>
  );
};

export default MsgSucess;
