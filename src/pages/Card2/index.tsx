// src/pages/Card2Page/index.tsx
import React from 'react';
import Card2 from '../../components/Card2'; // Supondo que você tenha um componente Card2
import NavBar from '../../components/Navbar'; // Certifique-se de que o caminho está correto

const Card2Page: React.FC = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <NavBar />
      <Card2 />
    </div>
  );
};

export default Card2Page;
