import styled from 'styled-components';
import { motion } from 'framer-motion';

const ViralStrategySlide = () => {
  return (
    <SlideContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Content>
        <Title>Viral Strategy</Title>
        <StrategyGrid>
          <StrategyCard>
            <Icon>📣</Icon>
            <StrategyTitle>$WIZ</StrategyTitle>
            <StrategyText>
              Official token ticker campaign across all social platforms
              <DetailsList>
                <Detail>• Trending topic coordination</Detail>
                <Detail>• Celebrity endorsements</Detail>
                <Detail>• Global community engagement</Detail>
              </DetailsList>
            </StrategyText>
          </StrategyCard>

          <StrategyCard>
            <Icon>🔥</Icon>
            <StrategyTitle>Challenge Campaign</StrategyTitle>
            <StrategyText>
              Community-driven engagement to push token awareness
              <DetailsList>
                <Detail>• Social media challenges</Detail>
                <Detail>• Creative content creation</Detail>
                <Detail>• Community spotlight features</Detail>
              </DetailsList>
            </StrategyText>
          </StrategyCard>

          <StrategyCard>
            <Icon>🎥</Icon>
            <StrategyTitle>Content Strategy</StrategyTitle>
            <StrategyText>
              High-quality content showcasing the project
              <DetailsList>
                <Detail>• Behind-the-scenes footage</Detail>
                <Detail>• Exclusive Wizkid content</Detail>
                <Detail>• Educational crypto content</Detail>
              </DetailsList>
            </StrategyText>
          </StrategyCard>

          <StrategyCard>
            <Icon>🌍</Icon>
            <StrategyTitle>Global Reach</StrategyTitle>
            <StrategyText>
              Multi-platform international campaign
              <DetailsList>
                <Detail>• Regional influencer partnerships</Detail>
                <Detail>• Localized content strategy</Detail>
                <Detail>• Cross-cultural engagement</Detail>
              </DetailsList>
            </StrategyText>
          </StrategyCard>
        </StrategyGrid>
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
  max-width: 1000px;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.secondary};
  text-align: center;
`;

const StrategyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StrategyCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
  }
`;

const Icon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const StrategyTitle = styled.h3`
  font-size: 1.8rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 1rem;
`;

const StrategyText = styled.div`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.text};
  opacity: 0.9;
  line-height: 1.6;
`;

const DetailsList = styled.ul`
  list-style: none;
  margin-top: 1rem;
`;

const Detail = styled.li`
  font-size: 1rem;
  color: ${props => props.theme.colors.text};
  opacity: 0.8;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

export default ViralStrategySlide; 