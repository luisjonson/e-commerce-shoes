import styled from "styled-components"

const Primary_buttonStaled = styled.button`
    margin-top: 10px;
    width: 220px;
    height: 48px;
    border-radius: 8px;
    background-color: var(--primary-rgba);
    color: var(--light-gray-3);
    border: none;
   
`
const Primary_button = ({type, children, style }) => {
    return (
        <Primary_buttonStaled style={style} type={type} className='primary'>{children}</Primary_buttonStaled>
    )
}

export default Primary_button