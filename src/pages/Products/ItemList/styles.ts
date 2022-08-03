import styled from 'styled-components';

export const LiProduct = styled.li`
  padding: 0.5rem;
  background-color: ${(props) => (props.theme.name === 'dark' ? '#000' : '#eee')};
  border-radius: 0.25rem;
  color: ${(props) => props.theme.colors.text};
  overflow: hidden;

  a {
    color: inherit;
  }

  &:hover h3::before {
    width: 32px;
  }
`;

export const ImageProduct = styled.img`
  width: 100%;
  height: 100%;
  max-height: 450px;
  border-radius: 0.25rem;

  @media (max-width: 1200px) {
    max-height: 350px;
  }
`;

export const NameProduct = styled.h3`
  margin-top: 1.25rem;
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
  margin-bottom: 0.625rem;
  margin-left: 1.875rem;
`;

export const DescriptionProduct = styled.p`
  color: ${(props) => (props.theme.name === 'dark' ? '##b2b2b2' : '#404040')};
  margin-left: 1.875rem;
`;
