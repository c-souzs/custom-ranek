import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

export const Technology = styled.section`
  background-color: #000;
  box-shadow: inset 0 80px ${(props) => props.theme.colors.primary},
    inset 0 -80px ${(props) => props.theme.colors.primary};

  @media (max-width: 800px) {
    display: block;
    box-shadow: inset 0 -80px ${(props) => props.theme.colors.primary};
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;

  @media (max-width: 800px) {
    display: block;
  }
`;

export const TextContent = styled.div`
  padding-top: 10rem;
  padding-bottom: 10rem;

  @media (max-width: 800px) {
    padding: 3.75rem 0;
  }
`;

export const Subtitle = styled.h3`
  display: block;
  margin-bottom: 1.25rem;

  color: #b2b2b2;
  font-weight: 400 !important;
`;

export const Description = styled.p`
  margin-bottom: 1.25rem;
  color: #b2b2b2;
`;

export const LinkProducts = styled(Link)`
  display: inline-block;

  color: #8877ff;
  font: 500 1.5rem/1.5 'Poppins', sans-serif;

  text-transform: uppercase;
  transition: 0.2s;

  margin-bottom: 5rem;

  &:hover {
    color: #6655dd;
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    background-color: currentColor;
  }

  @media (max-width: 800px) {
    margin-bottom: 3.75rem;
  }
`;

export const Qualities = styled.div`
  display: flex;
  gap: 2.5rem;
`;

export const Quality = styled.div`
  flex: 1;
`;

export const TitleQuality = styled.h4`
  width: max-content;

  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  color: #fff;
`;

export const DescriptionQuality = styled.p`
  color: #b2b2b2;
`;

const animateBorder = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(-360deg);
    }
`;

export const ImageContent = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;

  &::before {
    content: '';
    background-image: conic-gradient(#8877ff 20deg, transparent 120deg);
    width: 250%;
    height: 250%;
    position: absolute;
    animation: ${animateBorder} 5s linear infinite;
  }

  @media (max-width: 800px) {
    height: 300px;
  }
`;

export const ImageDelivery = styled.img`
  width: 98%;
  height: 98%;
  border-radius: 0.25rem;

  position: relative;
  z-index: 111;
`;
