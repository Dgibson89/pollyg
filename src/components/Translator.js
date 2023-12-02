import React, { useState } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import OpenAI from 'openai';

const openai = new OpenAI({dangerouslyAllowBrowser:true,
  apiKey: process.env.OPENAI_API_KEY });

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('french');
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
        default:
          promptLanguage = "French";
      }

      const completion = await openai.chat.completions.create({
        messages: [
          { "role": "system", "content": "You are a helpful assistant." },
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
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter text"
          aria-label="Text input"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </InputGroup>

      <Form>
        {['french', 'spanish', 'korean'].map((lang) => (
          <Form.Check 
            key={lang}
            type="radio"
            label={lang.charAt(0).toUpperCase() + lang.slice(1)}
            name="languageOptions"
            id={`radio-${lang}`}
            onChange={() => setSelectedLanguage(lang)}
            checked={selectedLanguage === lang}
          />
        ))}
      </Form>

      <Button onClick={handleTranslation} className="mt-3">Translate</Button>

      <div className="translation-output mt-3">
        {translatedText}
      </div>
    </div>
  );
};

export default Translator;
