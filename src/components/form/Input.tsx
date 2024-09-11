type Props = {
  type: string;
  placeholder: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: any) => void;
  className?: string;
  regex?: RegExp;
  error?: string;
};

const Input = ({
  label,
  name,
  onChange,
  placeholder,
  type,
  value,
  className,
  regex,
  error,
}: Props) => {
  return (
    <div className={`form_group ${className}`}>
      <label className="sub_title">{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        className="form_style"
        type={type}
        value={value}
        onChange={onChange}
        pattern={regex?.source}
      />
      {value && regex && error && !regex.test(value) && (
        <span className="error_message">{error}</span>
      )}
    </div>
  );
};

export default Input;
