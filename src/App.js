import "./App.css";
import React, { useState } from 'react';
import Header from "./components/Header";
import Translator from "./components/Translator";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('french');

  return (
    <div className="App">
      <Header selectedLanguage={selectedLanguage} />
      <Translator selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
    </div>
  );
}

export default App;
