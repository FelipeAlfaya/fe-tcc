import Icon from '../Icon';
import Loader from '../Loader';
import * as S from './styles';

type ButtonProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
  icon?: string;
  onClick?: () => void;
  isLoading?: boolean;
  color?: string;
};

const Button = (props: ButtonProps) => {
  return (
    <S.ButtonContainer
      color={props.color}
      onClick={props.onClick}
      fullWidth={props.fullWidth}
    >
      <>
        {(props.isLoading && (
          <>
            <Loader size={24} />
          </>
        )) || (
          <>
            {props.icon && <Icon>{props.icon}</Icon>}
            {props.children}
          </>
        )}
      </>
    </S.ButtonContainer>
  );
};

export default Button;
