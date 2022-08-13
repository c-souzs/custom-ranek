import styled, { keyframes } from 'styled-components';

const animationSkeleton = keyframes`
    from {
    background-position: 0px;
  }
  to {
    background-position: -200%;
  }
`;

interface SkeletonImageProps {
  w: string
  h: string
}

const BasicStyleSkeleton = styled.div`
  background-image: ${(props) => (props.theme.name === 'dark'
    ? 'linear-gradient(90deg, #161616 0px, #1d1d1d 50%, #161616 100%)'
    : 'linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%)')};

  animation: ${animationSkeleton} 5s infinite linear;
  background-size: 200%;
  border-radius: 0.25rem;
`;

export const HeaderSkeleton = styled(BasicStyleSkeleton)`
  width: 100%;
  height: 117px;

  @media (max-width: 696px) {
    height: 100px;
  }
`;

export const ContainerContent = styled.div`
  display: grid;
  gap: 1.875rem;
  grid-template-columns: 2fr 1fr;
  padding-top: 1.875rem;
  padding-bottom: 1.875rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const SkeletonImage = styled(BasicStyleSkeleton)<SkeletonImageProps>`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
`;

export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  gap: 1.25rem;
  align-items: center;
  justify-content: center;
  margin-top: 0.75rem;
`;

export const SkeletonTitle = styled(BasicStyleSkeleton)`
  width: 100%;
  height: 24px;
  margin-bottom: 1rem;
  display: block;
`;

export const SkeletonText = styled(BasicStyleSkeleton)`
  width: 100%;
  height: 16px;
  margin-bottom: 0.5rem;
  display: block;
`;

export const SkeletonButton = styled(BasicStyleSkeleton)`
  width: 40px;
  height: 40px;
  display: block;
`;

export const SkeletonBigButton = styled(BasicStyleSkeleton)`
  width: 125px;
  height: 45px;
  margin-top: 1rem;
`;
