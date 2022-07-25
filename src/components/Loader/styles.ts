import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const animate = keyframes`
    from{
        transform: rotateX(0) rotateY(0);
    }
    50%{
        transform: rotateX(180deg) rotateY(0);
    }
    to{
        transform: rotateX(180deg) rotateY(180deg);
    }
`;

export const Loader = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background-color: #8877ff;
  animation: ${animate} 1s infinite;
`;
