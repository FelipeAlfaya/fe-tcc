import styled from 'styled-components';
import { toRem } from '../../utils/toRem';

export const CardContainer = styled('div')`
  flex: 1;
  background-color: #15151c;
  border-radius: ${toRem(4)};
  color: #fff;
  height: ${toRem((250 * 9) / 16)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 2;
  transition: all 0.2s ease-in-out;

  span {
    margin-right: ${toRem(8)};
  }

  p {
    font-size: ${toRem(16)};
    font-weight: 800;
    text-transform: uppercase;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardTitle = styled('p')``;
