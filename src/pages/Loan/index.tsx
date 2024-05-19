import React from 'react';
import Card from '../../components/Card';
import NavBar from '../../components/Navbar'; // Certifique-se de que o caminho está correto

const LoanPage: React.FC = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <NavBar />
      <Card />
    </div>
  );
};

export default LoanPage;
