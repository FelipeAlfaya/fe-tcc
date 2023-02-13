import styled from 'styled-components';
import { toRem } from '../../utils/toRem';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${toRem(50)} ${toRem(20)};
`;

export const MembersContainer = styled.div`
  margin-top: ${toRem(50)};
  display: flex;
  flex-direction: column;
`;

export const Member = styled.div`
  width: 100%;
  display: flex;
  padding: ${toRem(20)} ${toRem(30)};
  background-color: #15151c;
  border-radius: ${toRem(4)};
  margin-bottom: ${toRem(20)};
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #1f1f2b;
    transform: scale(1.005);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const MemberIcon = styled.div`
  width: ${toRem(70)};
  height: ${toRem(70)};
  border-radius: 50%;
  background-color: #1f1f2b;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${toRem(2)} solid #00f0f1;
  overflow: hidden;
`;

export const MemberName = styled.p`
  font-size: ${toRem(20)};
  color: #fff;
  margin-left: ${toRem(20)};
  font-weight: 700;
  text-transform: uppercase;
`;

export const MemberEmail = styled.p`
  font-size: ${toRem(16)};
  color: #fff;
  margin-left: ${toRem(20)};
  font-weight: 400;
  text-transform: uppercase;
`;

export const HomeTitle = styled.h1`
  font-size: ${toRem(32)};
  color: #fff;
  margin-bottom: ${toRem(50)};
`;

export const HomeTitleBold = styled.span`
  font-weight: bold;
  color: #00f0ff;
`;

export const RemoveButton = styled.div`
  width: ${toRem(180)};
  height: ${toRem(60)};
  border-radius: 5px;
  background-color: #15151c;
  display: grid;
  place-items: center;
  justify-content: center;
  color: #fff;
  font-size: ${toRem(16)};
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-left: auto;
  transition: 0.3s;

  &:hover {
    background-color: #ff0000;
    opacity: 0.3;
  }

  &:active {
    opacity: 0.1;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
