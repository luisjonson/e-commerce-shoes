import styled from 'styled-components';
const CheckboxLabel = (
    {
        type = 'checkbox',
        value,
        onChange,
        required,
        className,
        children
    }) => {

    const CheckboxLabelStyled = styled.div`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 0.2rem;
     `
    return (
        <CheckboxLabelStyled>
            <input
                type={type}
                value={value}
                onChange={onChange}
                required={required}
                className={className}
            />
            {children}
            {required && <span className="required-asterisk">*</span>}
        </CheckboxLabelStyled>
    )
}

export default CheckboxLabel