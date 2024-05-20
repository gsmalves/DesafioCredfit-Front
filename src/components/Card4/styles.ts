// styles.ts

import styled from 'styled-components';

export const AdditionalDiv = styled.div`
  position: relative; /* Adiciona posição relativa para que o ScrollBar seja relativo a este container */
  width: 472px;
  height: 250px;
  overflow-y: auto;
  padding: 24px 0;
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



export const InnerDiv = styled.div`
  width: 100%;
  height: 44px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const ArrowDiv = styled.div`
  width: 24px;
  height: 24px;
  padding: 7.77px 3px;
  cursor: pointer;
`;

export const ImageDiv = styled.div<{ imageUrl: string }>`
  width: 44px;
  height: 44px;
  background-image: url(${props => props.imageUrl});
  background-size: contain;
  background-position: center;
`;

export const TextDiv = styled.div`
  width: calc(100% - 44px - 24px);
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: #2a3535;
`;

export const ExpandedContent = styled.div`
  display: ${(props: { isExpanded: boolean }) => (props.isExpanded ? 'block' : 'none')};
  padding: 10px;
  background-color: #f0f0f0;
  border-top: 1px solid #ccc;
  width: 100%;
`;
