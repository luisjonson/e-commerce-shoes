import styled from "styled-components";

const SelectMenuStyled = styled.select`
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 300px;
  background: transparent;
`;

const SelectMenu = ({ colecao, label, onChange, optionKey = "id", optionValue = "nome", value}) => {
  return (
    <>
        <label>{label}</label>    
      <SelectMenuStyled id={label}  onChange={onChange} value={value}>
        {colecao?.map((item) => (
            <option key={item[optionKey]} value={item[optionKey]}>
              {item[optionValue]}
            </option>
          ))}
      </SelectMenuStyled>
    </>
  );
};

export default SelectMenu;
