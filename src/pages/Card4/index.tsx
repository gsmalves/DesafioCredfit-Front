// src/pages/Card2Page/index.tsx
import React from 'react';
import Card4 from '../../components/Card4';
import NavBar from '../../components/Navbar';

const Card4Page: React.FC = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <NavBar />
      <Card4 />
    </div>
  );
};

export default Card4Page;
