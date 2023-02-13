import styled from 'styled-components';
import { toRem } from '../../utils/toRem';

export const LoaderContainer = styled('div')<{
  size?: number;
  color?: string;
}>`
  border: ${toRem(3)} solid ${({ color }) => color || '#f3f3f3'};
  border-top: ${toRem(3)} solid transparent;
  width: ${({ size }) => toRem(size || 50)};
  height: ${({ size }) => toRem(size || 50)};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
