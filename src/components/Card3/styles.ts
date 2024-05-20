import styled from 'styled-components';

export { AdditionalDiv } from '../Card/styles';

export const NewDiv = styled.div`
  display: flex;
  width: 472px;
  height: 64px;
  gap: 16px;
  margin-right: -100px; /* Adjust this value as needed */
  margin-bottom: 8px; /* Add space between NewDiv components */
`;

export const InnerDiv = styled.div`
  display: flex;
  align-items: flex-start; /* Align items at the start (top) */
  justify-content: center;
  width: 228px;
  height: 64px;
`;

export const InnerContent = styled.div`
  width: 324px;
  height: 24px;
  display: flex;
  align-items: flex-start; /* Ensure content aligns at the start (top) */
  gap: 8px;
  padding-top: 8px; /* Adjust this value as needed to move content up */
`;

export const Title = styled.div`
  width: 292px;
  height: 24px;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: #2A3535;
  margin-top: 0; /* Ensure no extra margin */
`;
