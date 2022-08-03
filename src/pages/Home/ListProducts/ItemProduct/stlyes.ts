import styled, { keyframes } from 'styled-components';

export const Product = styled.li`
  flex: 1;
  min-width: 280px;

  &:hover > a > h3::before {
    width: 32px;
  }
`;

interface ImageProductProps {
  show: boolean
}

export const ImageProduct = styled.img<ImageProductProps>`
  width: 100%;
  height: 375px;

  margin-bottom: 1rem;
  border-radius: 0.25rem;

  display: ${(props) => (props.show ? 'none' : 'block')};

  @media (max-width: 800px) {
    height: 350px;
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

export const SkeletonImage = styled(ImageProduct)`
  background-image: ${(props) => (props.theme.name === 'dark'
    ? 'linear-gradient(90deg, #161616 0px, #1d1d1d 50%, #161616 100%)'
    : 'linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%)')};
  animation: ${animationSkeleton} 5s infinite linear;
  background-size: 200%;

  display: ${(props) => (props.show ? 'block' : 'none')};
`;

export const TitleProduct = styled.h3`
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.5rem;

  display: flex;
  align-items: center;

  &::before {
    width: 24px;
    height: 8px;

    content: '';
    display: inline-block;
    margin-right: 0.5rem;
    background-color: #8877ff;
    border-radius: 0.125rem;

    transition: 0.2s;
  }
`;

export const PriceProduct = styled.p`
  padding-left: 1.875rem;
  color: #b2b2b2;

  font-weight: 400 !important;
`;
