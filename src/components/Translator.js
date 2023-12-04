import React, { useState } from 'react';
import { Form, Button, InputGroup, FormControl, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Translator.css";
import OpenAI from 'openai';

const openai = new OpenAI({dangerouslyAllowBrowser:true,
  apiKey: process.env.REACT_APP_OPENAI_API_KEY });

  const Translator = ({ selectedLanguage, setSelectedLanguage }) => {
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');

  const handleTranslation = async () => {
    try {
      let promptLanguage;
      switch (selectedLanguage) {
        case 'french':
          promptLanguage = "French";
          break;
        case 'spanish':
          promptLanguage = "Spanish";
          break;
        case 'korean':
          promptLanguage = "Korean";
          break;
          case 'english':
          promptLanguage = "English";
          break;
          case 'minionese':
            promptLanguage = "Minionese";
            break;
        default:
          promptLanguage = "French";
      }

      const completion = await openai.chat.completions.create({
        messages: [
          { "role": "system", "content": "You are a helpful, extremely smart polyglot." },
          { "role": "user", "content": `Translate this to ${promptLanguage}: ${inputText}` }
        ],
        model: "gpt-3.5-turbo",
      });

      const translatedText = completion.choices[0].message.content;
      setTranslatedText(translatedText);
    } catch (error) {
      console.error('Error during translation:', error);
      setTranslatedText('Error during translation.');
    }
  };

  return (
    <Container className="p-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter text"
              aria-label="Text input"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </InputGroup>

          <Form>
            <div className="mb-3">
              {['french', 'spanish', 'korean', 'english', 'minionese'].map((lang) => (
                <Form.Check 
                  key={lang}
                  inline
                  className="me-3"
                  type="radio"
                  label={lang.charAt(0).toUpperCase() + lang.slice(1)}
                  name="languageOptions"
                  id={`radio-${lang}`}
                  onChange={() => setSelectedLanguage(lang)}
                  checked={selectedLanguage === lang}
                />
              ))}
            </div>
          </Form>

          <Button onClick={handleTranslation} className="mb-3 w-100">Translate</Button>

          <div className="translation-output mt-3 translated-text">
            {translatedText}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Translator;
