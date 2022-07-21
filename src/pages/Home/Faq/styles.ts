import {
  Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel,
} from 'react-accessible-accordion';
import styled, { keyframes } from 'styled-components';

export const Faq = styled.section`
  background-color: #000;
`;

export const Container = styled.div`
  padding-top: 3.75rem;
  padding-bottom: 3.75rem;
`;

export const Questions = styled(Accordion)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Question = styled(AccordionItem)`
  background-color: #111111;
  padding: 1.25rem;
  border-radius: 0.25rem;
`;

export const TitleQuestion = styled(AccordionItemButton)`
  color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;

  &::before {
    width: 24px;
    height: 8px;

    content: '';
    display: inline-block;
    margin-right: 0.75rem;
    background-color: #8877ff;
    border-radius: 0.125rem;

    transition: 0.2s;
  }
`;

const animateHeight = keyframes`
    from{
        max-height: 0;
        opacity: 0
    }
    to{
        max-height: 200px;
        opacity: 1
    }
`;

export const AnswerQuestion = styled(AccordionItemPanel)`
  padding-left: 2.25rem;
  padding-top: 1rem;
  color: #b2b2b2;

  transition: 0.2s;
  animation: ${animateHeight} 0.5s forwards;
`;
