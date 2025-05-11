import '../css/InputWithLabel.css';

const InputWithLabel = ({
  label,
  type,
  value,
  onChange,
  placeholder = '',
  required = false,
  id,
  className = ''
}) => {
  // Gera um ID único se não for fornecido
  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
  const isCheckbox = type === "checkbox";


  return (
    <div className={`input-group ${className}`}>
      {isCheckbox ? (
        <>
          <input
            id={inputId}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={className}
          /> 
          <label htmlFor={inputId}>
            {label}
            {required && <span className="required-asterisk">*</span>}
          </label>
        </>
      ) : (
        <>
          <label htmlFor={inputId} className="input-label">
            {label}
            {required && <span className="required-asterisk">*</span>}
          </label>
          <input
            id={inputId}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className="input-field"
          />
        </>
      )}
    </div>
  );
};

export default InputWithLabel;