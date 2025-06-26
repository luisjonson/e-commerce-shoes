import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const GrupoBtnCrudStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 8px 16px;
  margin: 0 8px;
  border: 1px solid #333;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  color: #111;
`;
const BtnCriarStyled = styled.button`
  background-color: var(--verde-calro);
  border-radius: 5px;
  transition-duration: 200ms;
  &:hover {
    background-color: var(--success-rgba);
  }
`;

const BtnEditarStyled = styled.button`
  width: 50px;
  border-radius: 5px;
  background-color: var(--amarelo-claro);
  transition-duration: 200ms;
  &:hover {
    background-color: var(--green-limon);
  }
`;
const BtnDeleteStyled = styled.button`
  width: 50px;
  border-radius: 5px;
  background-color: var(--vermelho-suave);
  transition: background-color 0.3s;
`;

const BtnCriar = ({ criar, rota }) => {
  const navigate = useNavigate();

  const hendleCriar = () => {
    navigate(rota);
  };
  // const hendleEditar = () => {
  //   alert();
  // };
  // const hendleDeletar = () => {
  //   alert();
  // };
  return (
    <GrupoBtnCrudStyled>
      {criar && (
        <BtnCriarStyled onClick={hendleCriar}>Criar Produto</BtnCriarStyled>
      )}
      {/* {editarDeletar && (
        <>
          <BtnEditarStyled onClick={hendleEditar}>Editar</BtnEditarStyled>
          <BtnDeleteStyled onClick={hendleDeletar}>Deletar</BtnDeleteStyled>
        </>
     )} */}
    </GrupoBtnCrudStyled>
  );
};

export default BtnCriar;
