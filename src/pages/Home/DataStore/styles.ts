import styled from 'styled-components';

import backgroundDataStore from '../../../assets/backgroundDataStore.jpg';

export const DataStore = styled.section`
  background-image: url(${backgroundDataStore});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  position: relative;
`;

export const Shadow = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  max-width: 1400px;
  padding: 3.75rem 1.875rem;

  display: flex;
  gap: 3.75rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const NumberData = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    margin-bottom: 3.75rem;
  }
`;

export const TextNumber = styled.span`
  font-size: 5rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  color: #8877ff;
  line-height: 1;
`;

export const TextInformation = styled.p`
  font-size: 1.75rem;
  font-weight: 600;
  color: #fff;
`;
