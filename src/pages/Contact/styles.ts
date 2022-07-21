import styled from 'styled-components';

export const Contact = styled.main`
  background-color: ${(props) => props.theme.colors.primary};
  position: relative;
`;

export const Container = styled.div`
  padding-top: 3.75rem;
  padding-bottom: 3.75rem;

  &::after {
    width: 30vw;
    content: '';
    background-color: #8877ff;

    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    right: 0;
  }

  & > * {
    position: relative;
    z-index: 666;
  }
  @media (max-width: 800px) {
    padding-top: 1.875rem;
    padding-bottom: 1.875rem;
  }

  @media (max-width: 600px) {
    &::after {
      display: none;
    }
  }
`;

export const Title = styled.h2`
  color: #8877ff;
  font-size: 2.5rem !important;

  margin-bottom: 0.938rem;

  &::after {
    content: '.';
    color: ${(props) => props.theme.colors.text};
  }

  @media (max-width: 800px) {
    max-width: 400px;
    font-size: 1.5rem !important;
  }
`;

export const SectionForm = styled.section`
  height: fit-content;
  margin-bottom: 3.75rem;
`;

export const FormContact = styled.form`
  display: grid;
  gap: 1.875rem;
  grid-template-columns: 1fr 1fr;

  border-radius: 0.25rem;
  padding: 1.875rem 3.75rem;
  background-color: ${(props) => (props.theme.name === 'dark' ? '#000' : '#eee')};

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const ElementInline = styled.div`
  grid-column: 1/-1;
`;

export const ImageLocal = styled.img`
  width: 100%;
  min-height: 300px;
  max-height: 350px;

  border-radius: 0.25rem;
  border: 2px solid #000;
`;

export const City = styled.p`
  color: #8877ff;
  margin-bottom: 0.5rem;

  &::after {
    content: '.';
    color: #fff;
  }
`;

export const Lists = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  margin-top: 1rem;

  @media (max-width: 800px) {
    gap: 1.5rem;
  }
`;

export const ListInformation = styled.ul`
  display: flex;
  gap: 0.375rem;
  flex-direction: column;

  color: #fff;
  margin-top: 0.75rem;

  & li {
    margin-left: 2rem;
  }
`;
interface LiIconProps {
  src: string
}

export const LiIcon = styled.li<LiIconProps>`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  margin-left: 0 !important;

  &::before {
    width: 24px;
    height: 24px;
    content: '';
    display: inline-block;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
  }
`;

export const Social = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
  margin-left: 2rem;
`;
