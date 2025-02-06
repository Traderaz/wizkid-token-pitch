import styled from 'styled-components';
import { motion } from 'framer-motion';

const DeliverableSlide = () => {
  return (
    <SlideContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Content>
        <Title>Key Deliverables</Title>
        <TimelineContainer>
          <Phase>
            <PhaseTitle>⏳ Pre-Launch</PhaseTitle>
            <PhaseContent>
              <DeliverableItem>
                <DeliverableTitle>Wizkid's Teaser Tweet</DeliverableTitle>
                <DeliverableText>"Afrobeats to the blockchain—are you ready?"</DeliverableText>
              </DeliverableItem>
              <DeliverableItem>
                <DeliverableTitle>Social Media Campaign</DeliverableTitle>
                <DeliverableText>TikTok & IG engagement campaign with exclusive snippets</DeliverableText>
              </DeliverableItem>
              <DeliverableItem>
                <DeliverableTitle>Community Building</DeliverableTitle>
                <DeliverableText>Telegram group setup and initial community engagement</DeliverableText>
              </DeliverableItem>
            </PhaseContent>
          </Phase>

          <Phase>
            <PhaseTitle>🚀 Launch Day</PhaseTitle>
            <PhaseContent>
              <DeliverableItem>
                <DeliverableTitle>Official Announcement</DeliverableTitle>
                <DeliverableText>Coordinated social media launch across all platforms</DeliverableText>
              </DeliverableItem>
              <DeliverableItem>
                <DeliverableTitle>Token Launch</DeliverableTitle>
                <DeliverableText>Strategic platform listings and market making</DeliverableText>
              </DeliverableItem>
              <DeliverableItem>
                <DeliverableTitle>Community Activation</DeliverableTitle>
                <DeliverableText>Global community engagement and platform adoption</DeliverableText>
              </DeliverableItem>
            </PhaseContent>
          </Phase>

          <Phase>
            <PhaseTitle>📢 Post-Launch</PhaseTitle>
            <PhaseContent>
              <DeliverableItem>
                <DeliverableTitle>Growth Initiatives</DeliverableTitle>
                <DeliverableText>Strategic social media campaigns to drive global adoption</DeliverableText>
              </DeliverableItem>
              <DeliverableItem>
                <DeliverableTitle>Market Expansion</DeliverableTitle>
                <DeliverableText>Strategic exchange listings and international market penetration</DeliverableText>
              </DeliverableItem>
              <DeliverableItem>
                <DeliverableTitle>Industry Integration</DeliverableTitle>
                <DeliverableText>Strategic partnerships with major music platforms and entertainment companies</DeliverableText>
              </DeliverableItem>
            </PhaseContent>
          </Phase>
        </TimelineContainer>
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
  max-width: 900px;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.secondary};
  text-align: center;
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Phase = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(10px);
  }
`;

const PhaseTitle = styled.h3`
  font-size: 2rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 1.5rem;
  border-bottom: 2px solid ${props => props.theme.colors.secondary};
  padding-bottom: 0.5rem;
`;

const PhaseContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const DeliverableItem = styled.div`
  padding-left: 1rem;
  border-left: 3px solid ${props => props.theme.colors.secondary};
`;

const DeliverableTitle = styled.h4`
  font-size: 1.3rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
`;

const DeliverableText = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.text};
  opacity: 0.8;
  line-height: 1.4;
`;

export default DeliverableSlide; 