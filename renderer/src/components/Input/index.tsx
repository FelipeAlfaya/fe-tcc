import * as S from './styles';

type InputProps = {
  placeholder?: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
};

const Input = (props: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  };

  return (
    <S.Field
      type={props.type}
      placeholder={props.placeholder}
      onInput={handleChange}
      name={props.name}
      value={props.value}
    />
  );
};

export default Input;
