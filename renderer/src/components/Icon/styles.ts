import styled from 'styled-components';
import { toRem } from '../../utils/toRem';

export const IconContainer = styled('span')<{
  size?: number;
  color?: string;
}>`
  color: ${({ color }) => (color ? color : '#fff')};
  font-family: 'Material Symbols Outlined';
  font-style: normal;
  font-weight: 400;
  display: flex;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: 'liga';
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all 0.2s ease-out;
  font-size: ${({ size }) => (size ? toRem(size) : toRem(24))};
`;
