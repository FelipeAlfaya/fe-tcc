import styled from 'styled-components';
import { toRem } from '../../utils/toRem';

export const ButtonContainer = styled('div')<{
  fullWidth?: boolean;
  color?: string;
}>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  height: ${toRem(73)};
  display: flex;
  background: ${({ color }) => color || '#00f0ff'};
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: ${toRem(4)};
  font-weight: 800;
  font-size: ${toRem(16)};
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
  padding: ${toRem(16)} ${toRem(32)};

  span {
    margin-right: ${toRem(8)};
  }
`;
