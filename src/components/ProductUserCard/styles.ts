import styled from 'styled-components';

export const Container = styled.li`
  width: 100%;

  background-color: #000;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;

  color: #fff;
  position: relative;

  @media (max-width: 600px) {
    width: 100%;
    grid-template-columns: 1fr;
    min-width: auto;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 0.25rem;

  @media (max-width: 600px) {
    grid-column: 1/-1;
  }
`;

export const DataProduct = styled.div`
  word-break: break-all;
  align-self: end;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
`;

export const Price = styled.p`
  color: #b2b2b2;
`;

export const Description = styled.p`
  color: #b2b2b2;
`;

export const ButtonDelete = styled.button`
  width: 40px;
  height: 40px;

  background-color: transparent;
  border-radius: 0.25rem;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: end;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #111;
  }

  position: absolute;
  bottom: 64px;
  right: 16px;
`;

export const Email = styled.span`
  color: #e80;
  margin-right: 0.25rem;
  margin-top: 0.25rem;
`;

export const DataDelivery = styled.div`
  align-self: end;

  @media (max-width: 600px) {
    grid-column: 1/-1;
  }
`;

export const Title = styled.h3`
  font-weight: 500;
  color: #8877ff;

  margin-bottom: 0.75rem;
`;

export const ListData = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InformationBold = styled.p`
  display: inline-block;
  margin-right: 0.25rem;
  font-weight: 500;
`;
