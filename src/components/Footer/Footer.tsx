import React from "react";
import "./Footer.css"; // criaremos esse CSS já já

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>Meu Diário Pet — todos os direitos reservados © {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
