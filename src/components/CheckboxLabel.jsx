import styled from 'styled-components';
const CheckboxLabelStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.2rem;
    `
const CheckboxLabel = (
    {
        value,
        onChange,
        required,
        children
    }) => {

    return (
        <CheckboxLabelStyled>
            <input
                type="checkbox"
                value={value}
                onChange={onChange}
                required={required}
            />
            {children}
            {required && <span className="required-asterisk">*</span>}
        </CheckboxLabelStyled>
    )
}

export default CheckboxLabel