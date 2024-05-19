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

export const Dropdown = styled.div`
  position: absolute;
  top: 48px; /* Adjust this based on the NavBar height */
  right: 72px; /* Align with the right padding */
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const DropdownItem = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;

export const Arrow = styled.span`
  color: #fff;
  margin-left: 4px;
`;
