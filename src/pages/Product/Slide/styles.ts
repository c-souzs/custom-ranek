import styled from 'styled-components';

export const Slide = styled.section`
  overflow-x: hidden;
`;

interface ContainerImageProps {
  translateX: number
}

export const ContainerImages = styled.div<ContainerImageProps>`
  display: flex;
  margin-bottom: 0.75rem;

  transform: translateX(${(props) => `-${props.translateX}px`});
  transition: 0.4s;
`;

export const ImageSlide = styled.img`
  width: 100%;
  max-height: 375px;
  height: 100%;

  flex-shrink: 0;

  border-radius: 0.25rem;

  border: 0.125rem solid #000;

  @media (max-width: 800px) {
    max-height: 300px;
  }
`;

export const NavImages = styled.nav`
  display: flex;
  gap: 1.25rem;
  align-items: center;
  justify-content: center;
`;

export const ButtonChangeSlide = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;

  &:hover {
    background-color: #1d1d1d;
  }
`;
