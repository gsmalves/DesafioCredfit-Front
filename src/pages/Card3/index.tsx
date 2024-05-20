// src/pages/Card2Page/index.tsx
import React from 'react';
import Card3 from '../../components/Card3'; // Supondo que você tenha um componente Card2
import NavBar from '../../components/Navbar'; // Certifique-se de que o caminho está correto

const Card3Page: React.FC = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <NavBar />
      <Card3 />
    </div>
  );
};

export default Card3Page;
