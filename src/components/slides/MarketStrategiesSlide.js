import styled from 'styled-components';
import { motion } from 'framer-motion';

const MarketStrategiesSlide = () => {
  return (
    <SlideContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Content>
        <Title>Market Strategies</Title>
        <StrategyList>
          <Strategy>
            <Icon>🔥</Icon>
            <StrategyContent>
              <StrategyTitle>Tease & Hype</StrategyTitle>
              <StrategyText>Wizkid drops a cryptic tweet like "Big sound, big money—watch this space."</StrategyText>
            </StrategyContent>
          </Strategy>

          <Strategy>
            <Icon>📈</Icon>
            <StrategyContent>
              <StrategyTitle>Liquidity Lock</StrategyTitle>
              <StrategyText>Ensuring price stability and investor confidence.</StrategyText>
            </StrategyContent>
          </Strategy>

          <Strategy>
            <Icon>💬</Icon>
            <StrategyContent>
              <StrategyTitle>Telegram Community</StrategyTitle>
              <StrategyText>24/7 chat with exclusive giveaways & token rewards.</StrategyText>
            </StrategyContent>
          </Strategy>

          <Strategy>
            <Icon>📱</Icon>
            <StrategyContent>
              <StrategyTitle>Viral Platforms</StrategyTitle>
              <StrategyText>Leveraging X, TikTok, Instagram to push adoption.</StrategyText>
            </StrategyContent>
          </Strategy>
        </StrategyList>
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
`;

const StrategyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Strategy = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(10px);
  }
`;

const Icon = styled.span`
  font-size: 2rem;
  min-width: 40px;
`;

const StrategyContent = styled.div`
  flex: 1;
`;

const StrategyTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 0.5rem;
`;

const StrategyText = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.text};
  opacity: 0.9;
  line-height: 1.5;
`;

export default MarketStrategiesSlide; 