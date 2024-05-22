import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import arrowChevron3 from '../../assets/ArrowChevron3.svg';
import closeButtonSvg from '../../assets/Button-close.svg';
import groupImage from '../../assets/Group.svg';
import checkImage from '../../assets/check-icon.svg';
import GenericCard from '../../components/GenericCard';
import { useSliderValue } from '../Contexts/SliderValueContext';
import {
  AdditionalDiv,
  ArrowDiv,
  ButtonAndTextWrapper,
  CloseButton,
  CloseButtonIcon,
  CloseButtonWrapper,
  ExpandedContentWrapper,
  Image,
  ImageDiv,
  ImageWrapper,
  InformationsWrapper,
  InnerContent,
  InnerDiv,
  LeftDiv,
  LeftDivBottom,
  LeftDivBottomText,
  LeftDivTop,
  LeftDivTopText,
  Line,
  Modal,
  ModalContent,
  ModalOverlay,
  OcultarText,
  OuterDiv,
  Paragraph,
  RightDiv,
  RightDivBottom,
  RightDivBottomText,
  RightDivTop,
  RightDivTopText,
  TextDiv
} from './styles';

interface Loan {
  id: number;
  employeeId: number;
  amount: string;
  installments: number;
  installmentAmount: string;
  firstInstallmentDate: string;
  paymentStatus: string;
  failureReason: string | null; 
}

interface Employee {
  id: number;
  fullName: string;
  cpf: string;
  email: string;
  password: string;
  salary: string;
  companyId: {
    businessName: string;
  };
}

interface Card {
  id: number;
  imageUrl: string;
  title: string;
  isExpanded: boolean;
  closeButtonSvg: string;
}

const Card4: React.FC = () => {
  const { selectedEmployee } = useSliderValue();
  const history = useHistory();
  const [cards, setCards] = useState<Card[]>([]);
  const [loans, setLoans] = useState<Loan[]>([]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [companyName, setCompanyName] = useState<string>('');

  useEffect(() => {
    if (selectedEmployee) {
      axios.get(`http://localhost:3000/loans/employee/${selectedEmployee.id}`)
        .then(response => {
          let failedLoanCount = 0;
          let successfulLoanCount = 0;
  
          const newCards = response.data.map((loan: Loan) => {
            let title = '';
            if (loan.failureReason !== null) {
              title = `SOLICITAÇÃO DE EMPRÉSTIMO ${++failedLoanCount}`;
            } else {
              title = `EMPRÉSTIMO CORRENTE ${++successfulLoanCount}`;
            }
            return {
              id: loan.id,
              imageUrl: loan.failureReason !== null ? groupImage : checkImage,
              title: title,
              isExpanded: false,
              closeButtonSvg: closeButtonSvg,
            };
          });
          setCards(newCards);
        })
        .catch(error => {
          console.error('Error fetching loans:', error);
        });
  
      axios.get(`http://localhost:3000/employees/${selectedEmployee.id}`)
        .then(response => {
          setCompanyName(response.data.companyId.businessName);
        })
        .catch(error => {
          console.error('Error fetching company name:', error);
        });
    }
  }, [selectedEmployee]);

  const handleBackButtonClick = () => {
    history.push('/card2');
  };

  const handleArrowClick = (card: Card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const formatCurrency = (value: string) => {
    return parseFloat(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR').format(date);
  };

  return (
    <GenericCard
      title="Crédito Consignado"
      text="Você solicitou seu empréstimo! Agora aguarde as etapas de análises serem concluídas!"
      button1Text="Voltar"
      onButton1Click={handleBackButtonClick}
      button1Color="#057D88"
      button2Text="Novo empréstimo"
      onButton2Click={() => console.log('Ação 2 clicada')}
      button2Color="#fff"
    >
      <AdditionalDiv>
        {cards.map((_card) => (
          <React.Fragment key={_card.id}>
            <InnerDiv>
              <ImageDiv imageUrl={_card.imageUrl} />
              <TextDiv>{_card.title}</TextDiv>
              <ArrowDiv onClick={() => handleArrowClick(_card)}>
                <img src={arrowChevron3} alt="Expandir" />
              </ArrowDiv>
            </InnerDiv>
          </React.Fragment>
        ))}
      </AdditionalDiv>

      {selectedCard && (
        <ModalOverlay>
          <Modal>
            <ModalContent>
              <InnerDiv>
                <ImageDiv imageUrl={selectedCard.imageUrl} />
                <TextDiv>{selectedCard.title}</TextDiv>
              </InnerDiv>
              <Line/>
              <ExpandedContentWrapper>
                <InnerContent style={{backgroundColor: selectedCard.imageUrl === groupImage ? '#FBEA6729' : '#9AF8AB29'}}>
                  <ImageWrapper>
                    <Image imageUrl={selectedCard.imageUrl} />
                  </ImageWrapper>
                  <Paragraph style={{color: selectedCard.imageUrl === groupImage ? '#B35200' : '#01354E'}}>
                    {selectedCard.imageUrl === groupImage ? `Reprovado: ${loans.find(loan => loan.id === selectedCard.id)?.failureReason}` : 'Crédito Aprovado'}
                  </Paragraph>
                </InnerContent>
                <ButtonAndTextWrapper>
                  <CloseButtonWrapper>
                    <CloseButton onClick={handleCloseModal}>
                      <CloseButtonIcon src={selectedCard.closeButtonSvg} alt="Botão Fechar" />
                    </CloseButton>
                  </CloseButtonWrapper>
                  <OcultarText>Ocultar</OcultarText>
                </ButtonAndTextWrapper>
              </ExpandedContentWrapper>
              <InformationsWrapper>
                {loans.map((_loan, index) => {
                  if (selectedCard.id === _loan.id) { 
                    return (
                      <React.Fragment key={index}>
                        <OuterDiv>
                          <LeftDiv>
                            <LeftDivTop>
                              <LeftDivTopText>Empresa</LeftDivTopText>
                            </LeftDivTop>
                            <LeftDivBottom>
                              <LeftDivBottomText>{companyName}</LeftDivBottomText>
                            </LeftDivBottom>
                          </LeftDiv>
                          <RightDiv>
                            <RightDivTop>
                              <RightDivTopText>Data de Vencimento</RightDivTopText>
                            </RightDivTop>
                            <RightDivBottom>
                              <RightDivBottomText>{formatDate(_loan.firstInstallmentDate)}</RightDivBottomText>
                            </RightDivBottom>
                          </RightDiv>
                        </OuterDiv>
                        <OuterDiv>
                          <LeftDiv>
                            <LeftDivTop>
                              <LeftDivTopText>Número de Parcelas</LeftDivTopText>
                            </LeftDivTop>
                            <LeftDivBottom>
                              <LeftDivBottomText>{_loan.installments}x</LeftDivBottomText>
                            </LeftDivBottom>
                          </LeftDiv>
                          <RightDiv>
                            <RightDivTop>
                              <RightDivTopText>Valor da Parcela</RightDivTopText>
                            </RightDivTop>
                            <RightDivBottom>
                              <RightDivBottomText>{formatCurrency(_loan.installmentAmount)}</RightDivBottomText>
                            </RightDivBottom>
                          </RightDiv>
                        </OuterDiv>
                        {selectedCard.imageUrl !== groupImage && ( // Renderizar apenas se não houver falha
                        <OuterDiv>
                          <LeftDiv>
                            <LeftDivTop>
                              <LeftDivTopText>Total Financiado</LeftDivTopText>
                            </LeftDivTop>
                            <LeftDivBottom>
                              <LeftDivBottomText>{formatCurrency(_loan.amount)}</LeftDivBottomText>
                            </LeftDivBottom>
                          </LeftDiv>
                        </OuterDiv>
                      )}
                    </React.Fragment>
                  );
                } else {
                  return null; 
                }
              })}
            </InformationsWrapper>
          </ModalContent>
        </Modal>
      </ModalOverlay>
    )}

  </GenericCard>
);
};

export default Card4;