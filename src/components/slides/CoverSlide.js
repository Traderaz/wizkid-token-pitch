import styled from 'styled-components';
import { motion } from 'framer-motion';

const CoverSlide = () => {
  return (
    <SlideContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <GlassCard>
        <Content>
          <LogoContainer>
            <Logo>W</Logo>
          </LogoContainer>
          <Title>Wizkid Token</Title>
          <Subtitle>The Future of Afrobeats & Crypto</Subtitle>
          <Description>
            🚀 Empowering a digital economy with rhythm and innovation
          </Description>
          <GradientBar />
        </Content>
      </GlassCard>
      <BackgroundGlow />
    </SlideContainer>
  );
};

const SlideContainer = styled(motion.div)`
  height: 100vh;
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
  text-align: center;
  position: relative;
`;

const LogoContainer = styled.div`
  width: 80px;
  height: 80px;
  background: ${props => props.theme.colors.gradient.primary};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  box-shadow: ${props => props.theme.shadows.card};
`;

const Logo = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.secondary};
  text-shadow: ${props => props.theme.shadows.text};
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: ${props => props.theme.colors.gradient.secondary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: ${props => props.theme.shadows.text};
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.text};
  opacity: 0.9;
`;

const Description = styled.p`
  font-size: 1.2rem;
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

export default CoverSlide; 