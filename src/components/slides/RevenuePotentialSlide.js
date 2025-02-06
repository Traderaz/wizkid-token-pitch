import styled from 'styled-components';
import { motion } from 'framer-motion';

const RevenuePotentialSlide = () => {
  return (
    <SlideContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Content>
        <Title>Revenue Potential</Title>
        <RevenueList>
          <RevenueItem>
            <Icon>🏦</Icon>
            <RevenueContent>
              <RevenueTitle>Market Making</RevenueTitle>
              <RevenueText>Building a sustainable token economy through strategic partnerships and market development</RevenueText>
              <DetailsList>
                <Detail>• Automated price discovery mechanism</Detail>
                <Detail>• Strategic exchange partnerships</Detail>
                <Detail>• Global market expansion</Detail>
              </DetailsList>
            </RevenueContent>
          </RevenueItem>

          <RevenueItem>
            <Icon>📊</Icon>
            <RevenueContent>
              <RevenueTitle>Growth Strategy</RevenueTitle>
              <RevenueText>More adoption = increased token value</RevenueText>
              <DetailsList>
                <Detail>• Community-driven growth initiatives</Detail>
                <Detail>• Strategic partnerships with music platforms</Detail>
                <Detail>• Global expansion through Afrobeats network</Detail>
              </DetailsList>
            </RevenueContent>
          </RevenueItem>

          <RevenueItem>
            <Icon>💸</Icon>
            <RevenueContent>
              <RevenueTitle>Token Utility</RevenueTitle>
              <RevenueText>Premium access for token holders</RevenueText>
              <DetailsList>
                <Detail>• Exclusive access to Wizkid content</Detail>
                <Detail>• Premium membership benefits</Detail>
                <Detail>• Early access to new features</Detail>
              </DetailsList>
            </RevenueContent>
          </RevenueItem>
        </RevenueList>
      </Content>
    </SlideContainer>
  );
};

const SlideContainer = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.background};
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 40px;
`;

const Content = styled.div`
  width: 100%;
  max-width: 800px;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.secondary};
  text-align: center;
`;

const RevenueList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const RevenueItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(10px);
  }
`;

const Icon = styled.span`
  font-size: 2.5rem;
  min-width: 50px;
`;

const RevenueContent = styled.div`
  flex: 1;
`;

const RevenueTitle = styled.h3`
  font-size: 1.8rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 1rem;
`;

const RevenueText = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.text};
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const DetailsList = styled.ul`
  list-style: none;
  margin-top: 1rem;
`;

const Detail = styled.li`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.text};
  opacity: 0.8;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

export default RevenuePotentialSlide; 