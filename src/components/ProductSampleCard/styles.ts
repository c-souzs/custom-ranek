import styled, { css } from 'styled-components';

interface IProduct {
  backgroundActive: boolean
  soldOrOwned: boolean
}

export const Product = styled.li<IProduct>`
  flex: 1;
  min-width: 280px;
  padding: 0.5rem;
  border-radius: 0.25rem;

  &:hover > a > h3::before {
    width: 32px;
  }

  ${(props) => {
    if (props.backgroundActive) {
      return css`
        background-color: ${props.theme.name === 'dark' ? '#000' : '#eee'};
      `;
    }
    return null;
  }}

  ${(props) => {
    if (props.soldOrOwned) {
      return css`
        opacity: 0.5;
      `;
    }
    return null;
  }}
`;

export const ImageProduct = styled.img`
  width: 100%;
  height: 375px;

  margin-bottom: 1rem;
  border-radius: 0.25rem;

  @media (max-width: 800px) {
    height: 350px;
  }
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
  margin-left: 1.875rem;
  color: #b2b2b2;

  font-weight: 400 !important;
`;

export const DescriptionProduct = styled.p`
  color: ${(props) => (props.theme.name === 'dark' ? '#b2b2b2' : '#404040')};
  margin-left: 1.875rem;
  margin-top: 0.75rem;
`;
