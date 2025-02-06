import styled from 'styled-components';
import { motion } from 'framer-motion';

const PartnershipsSlide = () => {
  return (
    <SlideContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <GlassCard>
        <Content>
          <Title>Strategic Network</Title>
          <PartnershipList>
            <PartnershipItem>
              <Icon>💎</Icon>
              <PartnershipContent>
                <PartnershipTitle>Investment Backing</PartnershipTitle>
                <PartnershipText>Access to major crypto investment funds and venture capital</PartnershipText>
                <DetailsList>
                  <Detail>• Partnerships with leading blockchain VCs</Detail>
                  <Detail>• Strategic investment from crypto funds</Detail>
                  <Detail>• Long-term growth capital secured</Detail>
                </DetailsList>
              </PartnershipContent>
            </PartnershipItem>

            <PartnershipItem>
              <Icon>🌐</Icon>
              <PartnershipContent>
                <PartnershipTitle>Crypto Community Access</PartnershipTitle>
                <PartnershipText>Direct connection to established crypto communities and influencers</PartnershipText>
                <DetailsList>
                  <Detail>• 100M+ combined community reach</Detail>
                  <Detail>• Key opinion leader partnerships</Detail>
                  <Detail>• Global crypto media networks</Detail>
                </DetailsList>
              </PartnershipContent>
            </PartnershipItem>

            <PartnershipItem>
              <Icon>🎵</Icon>
              <PartnershipContent>
                <PartnershipTitle>Entertainment Industry</PartnershipTitle>
                <PartnershipText>Strategic music industry partnerships and platforms</PartnershipText>
                <DetailsList>
                  <Detail>• Major record label connections</Detail>
                  <Detail>• Global streaming platforms</Detail>
                  <Detail>• Entertainment conglomerates</Detail>
                </DetailsList>
              </PartnershipContent>
            </PartnershipItem>
          </PartnershipList>
          <GradientBar />
        </Content>
      </GlassCard>
      <BackgroundGlow />
    </SlideContainer>
  );
};

const SlideContainer = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.background};
  position: relative;
  overflow: hidden;
  padding: 20px;
`;

const BackgroundGlow = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  background: ${props => props.theme.colors.primary};
  filter: blur(150px);
  opacity: 0.15;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const GlassCard = styled.div`
  background: ${props => props.theme.colors.glass.background};
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.theme.colors.glass.border};
  border-radius: 24px;
  padding: 3rem;
  box-shadow: ${props => props.theme.shadows.card};
  width: 100%;
  max-width: 800px;
  position: relative;
  z-index: 2;
`;

const Content = styled.div`
  position: relative;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 3rem;
  background: ${props => props.theme.colors.gradient.secondary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: ${props => props.theme.shadows.text};
  text-align: center;
`;

const PartnershipList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const PartnershipItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  background: ${props => props.theme.colors.gradient.card};
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.glass.border};
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    background: ${props => props.theme.colors.glass.background};
  }
`;

const Icon = styled.span`
  font-size: 2.5rem;
  min-width: 50px;
  filter: drop-shadow(${props => props.theme.shadows.text});
`;

const PartnershipContent = styled.div`
  flex: 1;
`;

const PartnershipTitle = styled.h3`
  font-size: 1.8rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 1rem;
`;

const PartnershipText = styled.p`
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

const GradientBar = styled.div`
  height: 4px;
  background: ${props => props.theme.colors.gradient.secondary};
  position: absolute;
  bottom: -3rem;
  left: 0;
  right: 0;
  border-radius: 2px;
`;

export default PartnershipsSlide; 