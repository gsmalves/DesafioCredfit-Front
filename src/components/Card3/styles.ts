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
  align-items: center; /* Alinhe os elementos no centro verticalmente */
  justify-content: space-between; /* Adicione espaço entre os elementos */
  width: 228px;
  height: 64px;
`;

export const InnerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

export const Title = styled.div`
  height: 24px;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: #2A3535;
  margin: 0; /* Remove margin para evitar espaçamento extra */
`;

export const SubDiv = styled.div`
  display: flex;
  align-items: center; /* Alinhe os elementos no centro verticalmente */
  height: 32px;
  padding: 8px 0; /* Remova o padding lateral */
  gap: 8px;
`;

export const SubDivText = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color:  #535F5F;
  white-space: nowrap; /* Impede que o texto quebre em várias linhas */
  overflow: hidden; /* Oculta qualquer texto que ultrapasse o contêiner */
  text-overflow: ellipsis; /* Adiciona "..." quando o texto é cortado */
`;
