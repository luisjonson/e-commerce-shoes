import { useState } from 'react';
import styled from 'styled-components';


const SelectMenu = () => {
    const [opcao, setOpcao] = useState('');

    const handleChange = (e) => {
        setOpcao(e.target.value);
    };

    const SelectMenuStyled = styled.select`
       padding: 8px 12px;
       border-radius: 5px;
       border: 1px solid #ccc;
       font-size: 16px;
       width: 300px;
       background: transparent;
    `

    return (
        <>
            <SelectMenuStyled id="categoria" value={opcao} onChange={handleChange}>
                <option value=""><strong>Ordernar Por:</strong> mais relevantes</option>
                <option value="roupas">Roupas</option>
                <option value="calcados">Calçados</option>
                <option value="acessorios">Acessórios</option>
            </SelectMenuStyled>

            {/* {opcao && <p>Você selecionou: {opcao}</p>} */}
        </>
    );
};

export default SelectMenu;
