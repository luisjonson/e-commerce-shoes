import styled from "styled-components";

const SelectMenuStyled = styled.select`
  padding: 8px 12px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;
  background: transparent;
`;

const SelectMenu = ({
  colecao,
  label,
  onChange,
  optionKey = "id",
  optionValue = "nome",
  value,
  required,
}) => {
  return (
    <>
      <label>
        {label}
        {required && <span className="required-asterisk">*</span>}
      </label>
      <SelectMenuStyled
        id={label}
        onChange={onChange}
        value={value}
        required={required}
      >
        <option value="">Selecione...</option>
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
