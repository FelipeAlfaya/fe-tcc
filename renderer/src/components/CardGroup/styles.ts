import styled from 'styled-components';
import { toRem } from '../../utils/toRem';

export const Cards = styled('div')`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${toRem(250)}, 1fr));
  gap: ${toRem(20)};
  flex-wrap: wrap;
`;
