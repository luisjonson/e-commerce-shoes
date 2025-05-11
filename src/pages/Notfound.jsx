import { Link } from 'react-router-dom';
import styled from 'styled-components';
import voltar from '../assets/voltar.svg'

const NotfoundStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: var(--font-family-padrao);
    min-height: 100vh;

    & span{
        font-size: 5rem;
    }

    & a{
        padding-top: 20px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    & #voltar {
        width: 50px;
        padding: 0;
    }
`

function Notfound() {
    return (
        <NotfoundStyled>
            <span>404</span>
            <strong>File not found</strong>
            <Link to={"/"}> <img id='voltar' src={voltar} alt="voltar" />Voltar para a Home</Link>
        </NotfoundStyled>
    )
}

export default Notfound