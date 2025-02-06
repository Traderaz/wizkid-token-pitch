import styled from 'styled-components';
import { motion } from 'framer-motion';

const BigIdeaSlide = () => {
  return (
    <SlideContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <GlassCard>
        <Content>
          <Title>Bridging Music & Crypto</Title>
          <Subtitle>First Digital Token Merging Afrobeats with Web3</Subtitle>
          
          <FeatureList>
            <Feature>
              <Icon>🌍</Icon>
              <FeatureContent>
                <FeatureTitle>Global Market Fusion</FeatureTitle>
                <FeatureText>
                  Connecting the $2.3T crypto market with the $26B music industry through Afrobeats' global appeal
                </FeatureText>
              </FeatureContent>
            </Feature>

            <Feature>
              <Icon>💫</Icon>
              <FeatureContent>
                <FeatureTitle>Revolutionary Approach</FeatureTitle>
                <FeatureText>
                  Pioneering the intersection of digital assets and music entertainment
                </FeatureText>
              </FeatureContent>
            </Feature>

            <Feature>
              <Icon>🚀</Icon>
              <FeatureContent>
                <FeatureTitle>Market Opportunity</FeatureTitle>
                <FeatureText>
                  Tapping into Wizkid's 30M+ global audience and the rapidly growing crypto community
                </FeatureText>
              </FeatureContent>
            </Feature>
          </FeatureList>
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
  
  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
  }
`;

const Content = styled.div`
  position: relative;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: ${props => props.theme.colors.gradient.secondary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: ${props => props.theme.shadows.text};
  text-align: center;
`;

const Subtitle = styled.h3`
  font-size: 1.8rem;
  color: ${props => props.theme.colors.text};
  opacity: 0.9;
  text-align: center;
  margin-bottom: 3rem;
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Feature = styled.div`
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

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h4`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 0.5rem;
`;

const FeatureText = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.text};
  opacity: 0.8;
  line-height: 1.6;
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

export default BigIdeaSlide; 