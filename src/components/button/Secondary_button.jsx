import styled from "styled-components"


function Secondary_button({ className, children }) {

    const SecondaryButtonStyled = styled.button`
        margin-top: 10px;
        width: 220px;
        height: 48px;
        border-radius: 8px;
        background-color: var(--primary-rgba);
        color: var(--light-gray-3);
        border: none;
        cursor: pointer;
    `
    return (
        <SecondaryButtonStyled className={className}>{children}</SecondaryButtonStyled>
    )
}

export default Secondary_button
