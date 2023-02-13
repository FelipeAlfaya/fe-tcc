import styled from 'styled-components';
import { toRem } from '../../utils/toRem';

export const HeaderContainer = styled('div')`
  display: flex;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  align-items: center;
  padding: ${toRem(20)};
  width: 100%;
`;

export const Logo = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
`;

export const NavigationOptions = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
