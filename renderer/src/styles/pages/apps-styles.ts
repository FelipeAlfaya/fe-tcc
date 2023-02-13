import styled from 'styled-components';
import { toRem } from '../../utils/toRem';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${toRem(50)} ${toRem(20)};
`;

export const LoaderContainer = styled.div`
  margin: ${toRem(40)};
`;

export const HomeTitle = styled.h1`
  font-size: ${toRem(32)};
  color: #fff;
  margin-bottom: ${toRem(50)};
  margin-top: ${toRem(30)};
`;

export const HomeTitleBold = styled.span`
  font-weight: bold;
  color: #00f0ff;
`;

export const AppViewer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: ${toRem(20)};
  overflow: hidden;
  border-radius: ${toRem(10)};
  border: ${toRem(2)} solid #00f0ff;
  height: 70vh;
`;
