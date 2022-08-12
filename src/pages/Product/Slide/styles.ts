import styled, { keyframes } from 'styled-components';

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
    background-color: ${(props) => (props.theme.name === 'dark' ? '#1d1d1d' : '#E0E0E0')};
  }
`;

const animationSkeleton = keyframes`
    from {
    background-position: 0px;
  }
  to {
    background-position: -200%;
  }
`;

export const SkeletonLoading = styled.div`
  width: 100%;
  height: 400px;
  background-image: ${(props) => (props.theme.name === 'dark'
    ? 'linear-gradient(90deg, #161616 0px, #1d1d1d 50%, #161616 100%)'
    : 'linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%)')};
  animation: ${animationSkeleton} 5s infinite linear;
  background-size: 200%;
`;
