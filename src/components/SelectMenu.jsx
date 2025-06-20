import styled from "styled-components";

const SelectMenuStyled = styled.select`
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 300px;
  background: transparent;
`;

const SelectMenu = ({ colecao, label, onChange, value}) => {
//   const [opcao, setOpcao] = useState("");

//   const handleChange = (e) => {
//     setOpcao(e.target.value);
//   };

  return (
    <>
        <label>{label}</label>    
      <SelectMenuStyled id={label}  onChange={onChange} value={value}>
        {colecao &&
          colecao.map((item, index) => (
            <option key={index} value={item.id}>
              {item.nome}
            </option>
          ))}
      </SelectMenuStyled>
    </>
  );
};

export default SelectMenu;
