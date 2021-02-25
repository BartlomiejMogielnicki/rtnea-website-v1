import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  margin: 0 auto;
  height: 500px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const StyledTitle = styled.h2`
  color: #fff;
  text-align: center;
`;

const StyledContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledSection = styled.div`
  margin-top: 10px;
  width: 100%;
  font-size: 1.1em;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  font-size: 0.7em;
`;

const StyledTextarea = styled.textarea`
  height: 150px;
  min-height: 50px;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  font-size: 0.7em;
  resize: vertical;
`;

const ContactForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <StyledTitle>Formularz kontaktowy</StyledTitle>
      <StyledSection>
        <StyledLabel htmlFor="name">
          Imię i nazwisko
          <StyledInput
            type="text"
            name="name"
            id="name"
            placeholder="Imię i nazwisko..."
            maxLength="50"
          />
        </StyledLabel>
      </StyledSection>
      <StyledContainer>
        <StyledSection>
          <StyledLabel htmlFor="email">
            E-mail
            <StyledInput
              type="text"
              name="email"
              id="email"
              placeholder="Adres e-mail..."
            />
          </StyledLabel>
        </StyledSection>
        <StyledSection>
          <StyledLabel htmlFor="phone">
            Numer telefonu
            <StyledInput
              type="text"
              name="phone"
              id="phone"
              placeholder="Numer telefonu..."
            />
          </StyledLabel>
        </StyledSection>
      </StyledContainer>
      <StyledSection>
        <StyledLabel htmlFor="text">Wiadomość</StyledLabel>
        <StyledTextarea
          name="text"
          id="text"
          placeholder="Nie zapomnij wspomnieć gdzie odbędzie się event. Jeśli nie otrzymasz odpowiedzi w ciągu 24h ponów kontakt..."
        ></StyledTextarea>
      </StyledSection>
      <button type="submit">Wyślij</button>
    </StyledForm>
  );
};

export default ContactForm;
