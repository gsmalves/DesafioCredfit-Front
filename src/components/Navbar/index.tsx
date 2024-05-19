import React, { useState } from 'react';
import arrowChevron from '../../assets/ArrowChevron2.svg';
import brandIcon from '../../assets/Brand.svg'; // Importando a marca do site
import userIcon from '../../assets/user-icon.svg';
import { ArrowChevron, BrandIcon, Dropdown, DropdownItem, NavBarContainer, UserContainer, UserIcon, UserName } from './styles';

const NavBar: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <NavBarContainer>
      <BrandIcon src={brandIcon} alt="Brand Icon" /> {/* Marca do site */}
      <UserContainer onClick={handleToggleDropdown}>
        <UserIcon src={userIcon} alt="User Icon" />
        <UserName>John Doe</UserName>
        <ArrowChevron src={arrowChevron} alt="Arrow Chevron 2" /> {/* Marca do site */}
      </UserContainer>
      {isDropdownOpen && (
        <Dropdown>
          <DropdownItem>Usuário 2</DropdownItem>
          <DropdownItem>Usuário</DropdownItem>
        </Dropdown>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
