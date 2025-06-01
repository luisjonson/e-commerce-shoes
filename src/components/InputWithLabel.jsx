import '../css/InputWithLabel.css';
import CheckboxLabel from './checkboxLabel';

const InputWithLabel = ({
  label,
  type,
  value,
  onChange,
  placeholder = '',
  required = false,
  className = ''
}) => {
  // Gera um ID único se não for fornecido
  const isCheckbox = type === "checkbox";

  return (
    <div className={`input-group ${className}`}>
      {isCheckbox ? (
        <CheckboxLabel value={value} onChange={onChange} required={required}>
          <label>{label}</label>
        </CheckboxLabel>
      ) : (
        <>
          <label className="input-label">
            {label}
            {required && <span className="required-asterisk">*</span>}
          </label>
          <input
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