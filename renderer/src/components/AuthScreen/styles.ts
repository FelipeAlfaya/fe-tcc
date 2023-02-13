import styled from 'styled-components';
import { toRem } from '../../utils/toRem';

export const Container = styled.div`
  width: ${toRem(500)};
  border-radius: ${toRem(4)};
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  padding: ${toRem(30)} ${toRem(40)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.h1`
  margin-bottom: ${toRem(20)};
  font-size: ${toRem(24)};
  color: #23232e;
`;

export const Fields = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: ${toRem(20)};
  }
`;
