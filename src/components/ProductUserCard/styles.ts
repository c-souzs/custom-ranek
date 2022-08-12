import styled from 'styled-components';

export const Container = styled.li`
  width: 100%;

  background-color: #000;
  padding: 8px 16px;
  border-radius: 4px;

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
  border-radius: 4px;

  @media (max-width: 600px) {
    grid-column: 1/-1;
  }
`;

export const DataProduct = styled.div`
  word-break: break-all;
  align-self: end;
  margin-top: 12px;
  margin-bottom: 16px;
`;

export const Price = styled.p`
  color: #b2b2b2;
`;

export const Description = styled.p`
  color: #b2b2b2;
  max-width: 300px;
`;

export const ButtonDelete = styled.button`
  width: 40px;
  height: 40px;

  background-color: transparent;
  border-radius: 4px;
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
  bottom: 8px;
  right: 16px;
`;

export const Email = styled.span`
  color: #e80;
  margin-right: 4px;
  margin-top: 4px;
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

  margin-bottom: 12px;
`;

export const ListData = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InformationBold = styled.p`
  display: inline-block;
  margin-right: 4px;
  font-weight: 500;
`;
