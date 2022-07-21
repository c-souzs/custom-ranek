import React from 'react';
import Title from '../../../components/Title';

import * as C from './styles';

const questions = [
  {
    id: 1,
    title: 'Qual a forma de pagamento?',
    answer:
      'Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.',
  },
  {
    id: 2,
    title: 'Como posso entrar em contato?',
    answer:
      'Você pode entrar em contato atráves do formulário disponíveis no meu ou se dirigir até um de nossos centros de distribuição levando seus documentos básicos mais o comprovante de comprar do produto. Você pode entrar em contato direto com o vendedor, entretanto não nos responsabilizamos pelo assunto tratado.',
  },
  {
    id: 3,
    title: 'Vocês possuem algum desconto?',
    answer:
      'Para ter algum desconto ou redução do preço deve entrar em contato direto com o vendedor do produto. Nós interferimos somente quando vemos um preço abusivo.',
  },
  {
    id: 4,
    title: 'Qual a garantia que possuo?',
    answer:
      'Por parte nossa você não apresenta garantia, visto que verificamos e testamos os produtos em nossos centros de distribuição antes de enviar o produto. Pode haver uma garantia fora da plataforma com o vendedor',
  },
  {
    id: 5,
    title: 'Posso parcelar no boeto?',
    answer: 'Não. Nós retiramos essa opção por questão de segurança dos vendedores.',
  },
];

const Faq = (): JSX.Element => (
  <C.Faq>
    <C.Container className="container">
      <Title mB="2.5rem" colorFixed>
        perguntas frequentes
      </Title>
      <C.Questions allowMultipleExpanded>
        {questions.map((question) => (
          <C.Question key={question.id}>
            <C.TitleQuestion className="font-1-m-b">{question.title}</C.TitleQuestion>
            <C.AnswerQuestion className="font-2-s">{question.answer}</C.AnswerQuestion>
          </C.Question>
        ))}
      </C.Questions>
    </C.Container>
  </C.Faq>
);

export default Faq;
