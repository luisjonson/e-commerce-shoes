import '../css/AuthCard.css'
const FormCard = (
  {
    title,
    children,
    footerContent,
    width = '400px'
  }
) => {

  return (
    <div className="auth-card" style={{ width }}>
      <div className="auth-card-header">
        <h2>{title}</h2>
      </div>
      <div className="auth-card-body">{children}</div>
      {footerContent && <div className="auth-card-footer">{footerContent}</div>}
    </div>
  )
}

export default FormCard