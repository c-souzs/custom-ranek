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
  border-radius: 4px;
`;

export const SkeletonImage = styled(BasicStyleSkeleton)<SkeletonImageProps>`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
`;

export const SkeletonTitle = styled(BasicStyleSkeleton)`
  width: 100%;
  height: 24px;
  margin-top: 16px;
  margin-bottom: 16px;
  display: block;
`;

export const SkeletonText = styled(BasicStyleSkeleton)`
  width: 100%;
  height: 16px;
  margin-bottom: 8px;
  display: block;
`;

export const SkeletonButton = styled(BasicStyleSkeleton)`
  width: 40px;
  height: 40px;
  display: block;
`;

export const ContainerSkeletonDelivery = styled.div`
  margin-top: 16px;
`;

export const ContainerSkeletonButton = styled.div`
  position: absolute;
  bottom: 8px;
  right: 16px;
`;
