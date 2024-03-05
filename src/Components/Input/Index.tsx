const Input = ({
  handleChange,
  name,
  type,
  htmlName,
  id,
  required,
  value,
}: {
  handleChange: (event: any) => void;
  name: string;
  type: any;
  htmlName: string;
  id?: string;
  required: boolean;
  value: any;
}) => {
  return (
    <>
      <label htmlFor={htmlName}>{name}: </label>
      <input
        type={type}
        name={htmlName}
        id={id || htmlName}
        required={required}
        onChange={handleChange}
        value={value || ''}
      />
    </>
  );
};

export default Input;
