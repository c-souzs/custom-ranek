/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookLogo, InstagramLogo, YoutubeLogo } from 'phosphor-react';

import useInput from '../../hooks/useInput';
import useInformationPage from '../../hooks/useInformationPage';

import Input from '../../components/Form/Input';
import Subtitle from '../../components/Subtitle';

import mapRj from '../../assets/rjMapa.jpg';
import time from '../../assets/time.svg';
import local from '../../assets/local.svg';
import warning from '../../assets/warningCircle.svg';
import TitlePackage from '../../components/TitlePackage';

import * as C from './styles';

const Contact = (): JSX.Element => {
  const { setValue: setValueName, ...name } = useInput('');
  const { setValue: setValueTelephone, ...telephone } = useInput('');
  const { setValue: setValueEmail, ...email } = useInput('email');
  const { setValue: setValueMessage, ...message } = useInput('');

  const dataInformationPage = {
    title: 'Contato',
    description: 'Entre em contato conosco por email e aguarde 24 horas ou agende sua visita.',
  };
  useInformationPage(dataInformationPage);

  return (
    <C.Contact className="paddingDistanceHeader">
      <TitlePackage subtitle="meios de contato" title="fale conosco" />
      <C.Container className="container">
        <C.ContentForm>
          <Subtitle text="Aguarde até 24 hrs" />
          <C.FormContact>
            <Input label="Nome" placeholder="Nome" name="name" {...name} />
            <Input label="Telefone" placeholder="(XX XXXX-XXXX)" name="telephone" {...telephone} />
            <C.ElementInline>
              <Input label="Email" placeholder="contato@gmail.com" name="email" required {...email} />
            </C.ElementInline>
            <C.ElementInline>
              <Input label="Messagem" placeholder="O que você precisa?" name="message" {...message} />
            </C.ElementInline>
            <button className="basicStyleButtonOrLink" type="submit">
              Enviar menssagem
            </button>
          </C.FormContact>
        </C.ContentForm>
        <div>
          <Subtitle text="Viste nossas sedes" />
          <C.ImageLocal src={mapRj} />
          <C.Lists>
            <C.ListInformation className="font-2-s">
              <C.LiIcon src={local}>Rua Ali Perto, 35</C.LiIcon>
              <li>Andar 56 - Sala 4.</li>
              <li>Brasil - Terra - Via Láctea.</li>
            </C.ListInformation>
            <C.ListInformation className="font-2-s">
              <C.LiIcon src={time}>De segunda a sexta.</C.LiIcon>
              <li>Das 8:00 às 16:00.</li>
              <li>Não funcionamos em feriado.</li>
            </C.ListInformation>
            <C.ListInformation className="font-2-s">
              <C.LiIcon src={warning}>Não funcionamos em feriados.</C.LiIcon>
              <li>Visitas somente agendadas.</li>
              <li>Protocolo de segurança.</li>
            </C.ListInformation>
          </C.Lists>
          <C.Social>
            <Link to="www.instagram.com">
              <InstagramLogo size={36} color="#8877ff" />
            </Link>
            <Link to="www.facebook.com">
              <FacebookLogo size={36} color="#8877ff" />
            </Link>
            <Link to="www.youtube.com">
              <YoutubeLogo size={36} color="#8877ff" />
            </Link>
          </C.Social>
        </div>
      </C.Container>
    </C.Contact>
  );
};

export default Contact;
