import styled from 'styled-components';

export const NavBarContainer = styled.div`
  width: 100%;
  height: 48px;
  padding: 0px 72px 0px 40px;
  background: #057D88;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const BrandIcon = styled.img`
  height: 32px;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const UserIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export const UserName = styled.span`
  font-size: 16px;
  color: #fff;
  margin-right: 4px;
`;

interface ArrowChevronProps {
  isDropdownOpen: boolean;
}

export const ArrowChevron = styled.img<ArrowChevronProps>`
  height: 20px;
  transition: transform 0.3s ease;
  transform: ${({ isDropdownOpen }) => (isDropdownOpen ? 'rotate(180deg)' : 'rotate(0)')};
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: white;
  color: black;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  width: 200px;
  max-height: 200px; /* Altura máxima da lista */
  overflow-y: auto; /* Ativa o scroll vertical */
  z-index: 1000;
`;

export const DropdownItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Arrow = styled.span`
  color: #fff;
  margin-left: 4px;
`;
