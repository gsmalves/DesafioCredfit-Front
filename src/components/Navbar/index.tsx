import axios from 'axios';
import React, { useEffect, useState } from 'react';
import arrowChevron from '../../assets/ArrowChevron2.svg';
import brandIcon from '../../assets/Brand.svg';
import userIcon from '../../assets/user-icon.svg';
import { Employee, useSliderValue } from '../Contexts/SliderValueContext';
import { ArrowChevron, BrandIcon, Dropdown, DropdownItem, NavBarContainer, UserContainer, UserIcon, UserName } from './styles';

const NavBar: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const { selectedEmployee, setSelectedEmployee } = useSliderValue();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:3000/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleEmployeeSelect = (employee: Employee) => {
    setSelectedEmployee(employee);
    setDropdownOpen(false);
  };

  return (
    <NavBarContainer>
      <BrandIcon src={brandIcon} alt="Brand Icon" />
      <UserContainer onClick={handleToggleDropdown}>
        <UserIcon src={userIcon} alt="User Icon" />
        <UserName>{selectedEmployee ? selectedEmployee.fullName : 'Selecione o funcionário'}</UserName>
        <ArrowChevron src={arrowChevron} alt="Arrow Chevron 2" isDropdownOpen={isDropdownOpen} />
      </UserContainer>
      {isDropdownOpen && (
        <Dropdown>
          {employees.map((employee) => (
            <DropdownItem key={employee.id} onClick={() => handleEmployeeSelect(employee)}>
              {employee.fullName}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
