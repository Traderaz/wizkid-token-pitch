import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Define Afrobeats color palette
const colors = {
  orange: '#FF6B00',
  yellow: '#FFD700',
  green: '#00A86B',
  darkBg: '#1A0F3C',
  lightText: 'rgba(255, 255, 255, 0.9)',
  darkText: '#0A0A0F'
};

const ShareOptions = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
`;

const ShareButton = styled.button`
  padding: 12px 24px;
  background: linear-gradient(45deg, #FFD700, #FF1493);
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const SharePopup = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const ShareLink = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  margin-bottom: 10px;
`;

const PitchDeck = () => {
  const [showShare, setShowShare] = useState(false);
  
  const copyToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
  };

  const shareViaEmail = () => {
    const url = window.location.href;
    const subject = 'Check out Wizkid Token Pitch Deck';
    const body = `View our pitch deck here: ${url}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    canvas.style.opacity = '0.4';
    document.body.appendChild(canvas);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const afrobeatsColors = [
      'rgba(255, 128, 0, 0.3)',  // Orange
      'rgba(255, 215, 0, 0.3)',  // Gold
      'rgba(0, 255, 127, 0.3)',  // Spring Green
      'rgba(255, 0, 127, 0.3)',  // Pink
      'rgba(148, 0, 211, 0.3)'   // Purple
    ];

    const symbols = ['♪', '♫', '♬', '🎵', '🎶'];
    const symbolsArray = [];

    for (let i = 0; i < 40; i++) {
      symbolsArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        color: afrobeatsColors[Math.floor(Math.random() * afrobeatsColors.length)],
        size: 15 + Math.random() * 25,
        rotation: Math.random() * Math.PI * 2,
        speed: 0.2 + Math.random() * 0.3,
        pulse: Math.random() * Math.PI * 2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      symbolsArray.forEach(symbol => {
        ctx.save();
        ctx.translate(symbol.x, symbol.y);
        ctx.rotate(symbol.rotation);
        symbol.pulse += 0.02;
        const scale = 1 + Math.sin(symbol.pulse) * 0.2;
        ctx.scale(scale, scale);
        ctx.font = `${symbol.size}px Arial`;
        ctx.fillStyle = symbol.color;
        ctx.fillText(symbol.symbol, 0, 0);
        ctx.restore();

        symbol.y -= symbol.speed;
        symbol.rotation += 0.01;

        if (symbol.y < -50) {
          symbol.y = canvas.height + 50;
          symbol.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.body.removeChild(canvas);
    };
  }, []);

  return (
    <PageContainer>
      <ShareOptions>
        <ShareButton onClick={() => setShowShare(!showShare)}>
          Share Presentation
        </ShareButton>
        
        {showShare && (
          <SharePopup>
            <ShareLink 
              value={window.location.href} 
              readOnly 
              onClick={(e) => e.target.select()}
            />
            <ShareButton onClick={copyToClipboard}>
              Copy Link
            </ShareButton>
            <ShareButton onClick={shareViaEmail}>
              Share via Email
            </ShareButton>
            {/* Add QR Code option if needed */}
          </SharePopup>
        )}
      </ShareOptions>
      <GradientOverlay />
      <ContentWrapper>
        <MainContent>
          <CoverSection>
            <Logo>W</Logo>
            <Title>Wizkid Token</Title>
            <Subtitle>The Future of Afrobeats & Crypto</Subtitle>
            <TagLine>Empowering a digital economy with rhythm and innovation</TagLine>
          </CoverSection>
          
          <StyledSection>
            <h2>The Big Idea</h2>
            <p>Revolutionizing the music industry through blockchain technology and Afrobeats culture. Creating a unique ecosystem where fans can directly support artists and participate in the future of music.</p>
          </StyledSection>
          
          <StyledSection>
            <h2>Market Strategies</h2>
            <p>Targeting the intersection of crypto enthusiasts and Afrobeats fans worldwide.</p>
            <ul>
              <li>Global Afrobeats community engagement</li>
              <li>Strategic partnerships with music platforms</li>
              <li>Innovative token utility in music streaming</li>
            </ul>
          </StyledSection>
          
          <StyledSection>
            <h2>Revenue Potential</h2>
            <p>Multiple revenue streams through:</p>
            <ul>
              <li>Token transactions and trading</li>
              <li>Exclusive content access</li>
              <li>Virtual events and experiences</li>
              <li>Artist collaboration platform</li>
            </ul>
          </StyledSection>
          
          <StyledSection>
            <h2>Strategic Partnerships</h2>
            <p>Building strong alliances with:</p>
            <ul>
              <li>Major streaming platforms</li>
              <li>Leading crypto exchanges</li>
              <li>Music industry influencers</li>
              <li>Global entertainment brands</li>
            </ul>
          </StyledSection>
          
          <StyledSection>
            <h2>Key Deliverables</h2>
            <p>Our roadmap includes:</p>
            <ul>
              <li>Token launch and distribution</li>
              <li>Platform development</li>
              <li>Community building initiatives</li>
              <li>Artist onboarding program</li>
            </ul>
          </StyledSection>
          
          <StyledSection>
            <h2>Viral Growth Strategy</h2>
            <p>Amplifying our reach through:</p>
            <ul>
              <li>Social media integration</li>
              <li>Influencer partnerships</li>
              <li>Community rewards program</li>
              <li>Exclusive events and drops</li>
            </ul>
          </StyledSection>
        </MainContent>
      </ContentWrapper>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  background: ${colors.darkBg};
  color: ${colors.lightText};
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
`;

const GradientOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(255, 107, 0, 0.15) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(0, 168, 107, 0.15) 0%, transparent 40%),
    radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%);
  pointer-events: none;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 4rem 0;
`;

const CoverSection = styled.section`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2rem;
`;

const Logo = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(45deg, ${colors.orange}, ${colors.green});
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  color: ${colors.lightText};
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 4.5rem;
  background: linear-gradient(90deg, ${colors.orange}, ${colors.yellow}, ${colors.green});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
`;

const TagLine = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
`;

const StyledSection = styled.section`
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid;
  border-image: linear-gradient(
    45deg,
    rgba(255, 107, 0, 0.5),
    rgba(0, 168, 107, 0.5)
  ) 1;
  border-radius: 20px;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  h2 {
    font-size: 2.8rem;
    font-weight: bold;
    background: linear-gradient(90deg, ${colors.orange}, ${colors.green});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 2rem;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, ${colors.orange}, ${colors.yellow}, ${colors.green});
      border-radius: 2px;
    }
  }
  
  p {
    font-size: 1.3rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    
    li {
      font-size: 1.1rem;
      padding: 1rem;
      background: rgba(255, 107, 0, 0.05);
      border-radius: 12px;
      border: 1px solid rgba(255, 107, 0, 0.1);
      display: flex;
      align-items: center;
      color: ${colors.lightText};
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateX(5px);
        background: rgba(255, 107, 0, 0.08);
        border-color: ${colors.orange};
      }
      
      &:before {
        content: '🎵';
        margin-right: 1rem;
        font-size: 1.2rem;
      }
    }
  }
`;

export default PitchDeck; 