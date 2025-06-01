import '../css/AuthCard.css'
import logo from '../assets/logo-footer.svg'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const FormCardStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  min-height: 100vh; 

  h2{
    display: flex;
    justify-content: center;
    font-size: 30px;
    margin: 20px;
    color: var(--dark-gray) ;
  }

  img{
     cursor: pointer;
  }
  
`
const FormCard = (
  {
    title,
    children,
    footerContent,
    width = '400px'
  }
) => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/')
  }
  return (
    <FormCardStyled>
      <div className="auth-card" style={{ width }}>
        <div className="auth-card-header">
          <img src={logo} alt="" onClick={handleHome} />
        </div>
        <div className="auth-card-body">
          <h2>{title}</h2>
          {children}
        </div>
        {footerContent && <div className="auth-card-footer">{footerContent}</div>}
      </div>
    </FormCardStyled>
  )
}

export default FormCard