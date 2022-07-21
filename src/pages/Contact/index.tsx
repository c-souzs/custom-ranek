/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookLogo, InstagramLogo, YoutubeLogo } from 'phosphor-react';
import useInput from '../../hooks/useInput';

import * as C from './styles';

import mapRj from '../../assets/rj-mapa.jpg';
import time from '../../assets/time.svg';
import local from '../../assets/local.svg';
import warning from '../../assets/warning-circle.svg';
import TitlePackage from '../../components/TitlePackage';
import Input from '../../components/Form/Input';
import ButtonSubmit from '../../components/Form/Button';

const Contact = (): JSX.Element => {
  const { setValue: setValueName, ...name } = useInput('');
  const { setValue: setValueTelephone, ...telephone } = useInput('');
  const { setValue: setValueEmail, ...email } = useInput('email');
  const { setValue: setValueMessage, ...message } = useInput('');

  return (
    <C.Contact>
      <TitlePackage subtitle="meios de contato" title="fale conosco" />
      <C.Container className="container">
        <C.SectionForm>
          <C.Title className="font-1-xl">Respondemos em até 24 horas</C.Title>
          <C.FormContact>
            <Input label="Nome" placeholder="Nome" name="name" {...name} />
            <Input label="Telefone" placeholder="(XX XXXX-XXXX)" name="telephone" {...telephone} />
            <C.ElementInline>
              <Input label="Email" placeholder="contato@gmail.com" name="email" required {...email} />
            </C.ElementInline>
            <C.ElementInline>
              <Input label="Messagem" placeholder="O que você precisa?" name="message" {...message} />
            </C.ElementInline>
            <ButtonSubmit>Enviar menssagem</ButtonSubmit>
          </C.FormContact>
        </C.SectionForm>
        <section>
          <C.Title className="font-1-xl">Ou nós faça uma visita</C.Title>
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
        </section>
      </C.Container>
    </C.Contact>
  );
};

export default Contact;
