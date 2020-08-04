import React from 'react';

import PageHeader from '../../components/PageHeader';
import { Container, SearchTeachers, InputBlock } from './styles';

const Teacherlist = () => {
  return (
    <Container>
      <PageHeader title="Estes são os proffys disponíveis.">
        <SearchTeachers>
          <InputBlock>
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </InputBlock>

          <InputBlock>
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day" />
          </InputBlock>

          <InputBlock>
            <label htmlFor="tiem">Hora</label>
            <input type="text" id="tiem" />
          </InputBlock>
        </SearchTeachers>
      </PageHeader>
    </Container>
  );
};

export default Teacherlist;
