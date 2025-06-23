import styled from 'styled-components';
import icon_warn from '../../assets/icon-warn.svg';
import { useEffect, useState } from "react";

const MsgWarnStyled = styled.div`
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

const MsgWarn = ({ msg , tempo = 10000}) => {
   const [visivel, setVisivel] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setVisivel(false);
      }, tempo);
  
      return () => clearTimeout(timer);
    }, [tempo]);
  
    if (!visivel) return null;
  return (
    <MsgWarnStyled>
      <img src={icon_warn} alt="Alerta" />
      <strong>{msg}</strong>
    </MsgWarnStyled>
  );
};

export default MsgWarn;
