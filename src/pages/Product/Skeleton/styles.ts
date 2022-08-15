import styled from 'styled-components';
import { BasicStyleSkeleton } from '../../../styles/globalStyles';

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

export const ContainerDataProduct = styled.div`
  @media (max-width: 800px) {
    grid-column: 1/-1;
    grid-row: 1/2;
  }
`;

export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  gap: 1.25rem;
  align-items: center;
  justify-content: center;
  margin-top: 0.75rem;
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
