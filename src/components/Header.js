import React from "react";
import { Container } from "react-bootstrap";

const Header = ({ selectedLanguage }) => {
  const getBackgroundImage = () => {
    switch (selectedLanguage) {
      case "english":
        return "url(https://images.unsplash.com/photo-1543015330-05fcfca844ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"; 
      case "spanish":
        return "url(https://images.unsplash.com/photo-1503187680590-525b6e7a793f?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"; 
      case "korean":
        return "url(https://images.unsplash.com/photo-1544094552-172c2153499e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
      case "minionese":
        return "url(https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"; 
      case "french":
      default:
        return "url(https://images.unsplash.com/photo-1543349689-9a4d426bee8e?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"; 
    }
  };

  const headerStyle = {
    backgroundImage: getBackgroundImage(),
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '500px',
    width: '100%',
    borderRadius: '60px',
    transition: 'background-image 0.5s ease'
  };
  

  return (
    <Container style={headerStyle} className="mb-4">
      <h1>Polyglot Bot</h1>
    </Container>
  );
};

export default Header;
