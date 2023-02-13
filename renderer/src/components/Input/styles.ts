import styled from 'styled-components';
import { toRem } from '../../utils/toRem';

export const Field = styled('input')`
  width: 100%;
  height: ${toRem(73)};
  font-size: ${toRem(16)};
  padding: ${toRem(12)} ${toRem(16)};
  background-color: #e9ecef;
  color: #212529;
  font-family: 'Roboto', sans-serif;
`;
