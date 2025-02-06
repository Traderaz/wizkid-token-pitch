import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Enhanced Nigerian-themed colors and patterns
const colors = {
  green: '#008751',  // Nigerian Green
  white: '#FFFFFF',  // Pure White
  lightGreen: '#00A86B',
  darkGreen: '#004D2C',
  darkBg: '#0A1F14',
  gold: '#FFD700',  // For accents
  lightText: 'rgba(255, 255, 255, 0.9)',
};

const ShareOptions = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  @media (min-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;

const ShareButton = styled.button`
  padding: 8px 16px;
  background: linear-gradient(45deg, ${colors.green}, ${colors.lightGreen});
  border: none;
  border-radius: 30px;
  color: ${colors.white};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  font-size: 0.9rem;
  
  @media (min-width: 768px) {
    padding: 12px 24px;
    font-size: 1rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    background: linear-gradient(45deg, ${colors.lightGreen}, ${colors.green});
  }

  &::before {
    content: '🔗';
    font-size: 1.2rem;
  }
`;

const SharePopup = styled.div`
  position: absolute;
  top: 100%;
  right: -10px;
  margin-top: 10px;
  background: rgba(0, 135, 81, 0.1);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 15px;
  border: 1px solid ${colors.green}40;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  width: calc(100vw - 40px);
  max-width: 300px;
  
  @media (min-width: 768px) {
    width: auto;
    right: 0;
  }
`;

const ShareLink = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${colors.green}40;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: ${colors.white};
  margin-bottom: 10px;
  font-size: 0.9rem;
  
  @media (min-width: 768px) {
    width: 300px;
    font-size: 1rem;
  }

  &:focus {
    outline: none;
    border-color: ${colors.green};
    box-shadow: 0 0 0 2px ${colors.green}30;
  }
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

    // Enhanced symbols array with more musical notation
    const symbols = ['♪', '♫', '♬', '🎵', '🎶', '𝄞', '𝄢', '𝅘𝅥𝅮', '𝅗𝅥', '𝄫'];
    const symbolsArray = [];

    // Create more symbols for denser background
    for (let i = 0; i < 60; i++) {
      symbolsArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        size: 15 + Math.random() * 25,
        rotation: Math.random() * Math.PI * 2,
        speed: 0.2 + Math.random() * 0.3,
        pulse: Math.random() * Math.PI * 2,
        color: `rgba(0, 135, 81, ${0.1 + Math.random() * 0.2})`
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
      <PatternOverlay />
      <ContentWrapper>
        <MainContent>
          <CoverSection>
            <Logo>
              <span>W</span>
            </Logo>
            <Title>Wizkid Token</Title>
            <Subtitle>The Future of Afrobeats & Crypto</Subtitle>
            <TagLine>🚀 Empowering a digital economy with rhythm and innovation.</TagLine>
          </CoverSection>

          <StyledSection>
            <h2>The Big Idea</h2>
            <StyledList>
              <li>🎶 First Afrobeats-inspired lifestyle crypto token.</li>
              <li>🌍 Bridges culture & decentralised finance.</li>
              <li>💰 Offers global accessibility to a new financial movement.</li>
            </StyledList>
          </StyledSection>

          <StyledSection>
            <h2>Market Strategies</h2>
            <StyledList>
              <li>🔥 Tease & Hype: Wizkid drops a cryptic tweet like "Big sound, big money—watch this space."</li>
              <li>📈 Liquidity Lock: Ensuring price stability and investor confidence.</li>
              <li>💬 Telegram Community: 24/7 chat with exclusive giveaways & token rewards.</li>
              <li>📱 Viral Platforms: Leveraging X, TikTok, Instagram to push adoption.</li>
            </StyledList>
          </StyledSection>

          <StyledSection>
            <h2>Revenue Potential</h2>
            <StyledList>
              <li>🏦 DEX Market Maker: Building a sustainable token economy.</li>
              <li>📊 Growth Strategy: More adoption = increased token value.</li>
              <li>💸 Token Utility: Community staking rewards & premium-tier access for holders.</li>
            </StyledList>
          </StyledSection>

          <StyledSection>
            <h2>Partnerships & Collaborations</h2>
            <StyledList>
              <li>🤝 Crypto Alliances: Collaborate with Web3 platforms & fintech firms.</li>
              <li>💎 Strategic Investors: Partnerships with major exchanges and blockchain firms.</li>
              <li>📢 Influencer Marketing: Leveraging global music stars & digital influencers.</li>
            </StyledList>
          </StyledSection>

          <StyledSection>
            <h2>Key Deliverables</h2>
            <h3>⏳ Pre-Launch:</h3>
            <StyledList>
              <li>Wizkid's teaser tweet: "Afrobeats to the blockchain—are you ready?"</li>
              <li>TikTok & IG engagement campaign.</li>
            </StyledList>
            
            <h3>🚀 Launch Day:</h3>
            <StyledList>
              <li>Official social media announcement.</li>
              <li>Community activation with fan incentives.</li>
            </StyledList>
            
            <h3>📢 Post-Launch:</h3>
            <StyledList>
              <li>Social media push to drive adoption.</li>
              <li>Exclusive holders' club access with perks.</li>
            </StyledList>
          </StyledSection>

          <StyledSection>
            <h2>Viral Strategy</h2>
            <StyledList>
              <li>📣 $WizToken: Official launch hashtag.</li>
              <li>🔥 Challenge Campaign: Fan-driven engagement to push token awareness.</li>
              <li>🎥 Hype Videos & Influencer Endorsements: High-quality content showcasing the project.</li>
            </StyledList>
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
    radial-gradient(circle at 20% 30%, rgba(0, 135, 81, 0.15) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 40%),
    radial-gradient(circle at 50% 50%, rgba(0, 168, 107, 0.1) 0%, transparent 50%);
  pointer-events: none;
  z-index: 1;
`;

const PatternOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: repeating-linear-gradient(
    45deg,
    ${colors.green}05,
    ${colors.green}05 10px,
    transparent 10px,
    transparent 20px
  );
  opacity: 0.05;
  pointer-events: none;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 2;

  @media (min-width: 768px) {
    padding: 0 3rem;
  }
`;

const MainContent = styled.div`
  gap: 4rem;
  padding: 4rem 0;
  
  @media (min-width: 768px) {
    gap: 8rem;
    padding: 8rem 0;
  }
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
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, ${colors.green}, ${colors.lightGreen});
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.white};
  margin-bottom: 2rem;
  position: relative;
  overflow: visible;
  
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: linear-gradient(45deg, ${colors.green}, ${colors.gold});
    border-radius: 25px;
    z-index: -1;
    opacity: 0.5;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
    font-size: 3rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  background: linear-gradient(90deg, ${colors.green}, ${colors.white}, ${colors.lightGreen});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  text-align: center;
  text-shadow: 0 0 20px rgba(0, 135, 81, 0.3);
  position: relative;
  
  &::after {
    content: '🌍';
    position: absolute;
    right: -40px;
    top: 0;
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 1rem 0;
  
  @media (min-width: 768px) {
    font-size: 2rem;
    margin: 1.5rem 0;
  }
`;

const TagLine = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0.5rem 0;
  
  @media (min-width: 768px) {
    font-size: 1.3rem;
    margin: 1rem 0;
  }
`;

const StyledSection = styled.section`
  background: rgba(255, 255, 255, 0.03);
  border: none;
  position: relative;
  padding: 2rem;
  margin: 1rem 0;
  min-height: auto;
  
  @media (min-width: 768px) {
    padding: 4rem;
    margin: 2rem 0;
    min-height: 300px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid transparent;
    border-radius: 20px;
    background: linear-gradient(45deg, ${colors.green}, ${colors.gold}) border-box;
    -webkit-mask:
      linear-gradient(#fff 0 0) padding-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    opacity: 0.3;
    transition: opacity 0.3s ease;
  }

  &::after {
    content: '🌟';
    position: absolute;
    top: -10px;
    right: -10px;
    font-size: 24px;
    transform: rotate(45deg);
  }

  &:hover::before {
    opacity: 1;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
    background: linear-gradient(90deg, ${colors.green}, ${colors.white}, ${colors.lightGreen});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 2rem;
    position: relative;
    display: inline-block;
    text-align: center;
    width: 100%;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, 
        ${colors.green}, 
        ${colors.gold}, 
        ${colors.green}
      );
      border-radius: 2px;
    }

    @media (min-width: 768px) {
      font-size: 4.5rem;
      margin-bottom: 3rem;
    }
  }
  
  h3 {
    font-size: 1.5rem;
    margin: 2rem 0 1rem 0;
    
    @media (min-width: 768px) {
      font-size: 1.8rem;
      margin: 2.5rem 0 1.5rem 0;
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
    grid-template-columns: 1fr;
    gap: 1rem;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    li {
      font-size: 1rem;
      padding: 1rem;
      line-height: 1.6;
      background: rgba(0, 135, 81, 0.05);
      border-radius: 12px;
      border: 1px solid rgba(0, 135, 81, 0.1);
      display: flex;
      align-items: flex-start;
      color: ${colors.lightText};
      transition: all 0.3s ease;
      word-break: break-word;
      
      &:hover {
        transform: translateX(5px);
        background: rgba(0, 135, 81, 0.08);
        border-color: ${colors.green};
      }
      
      &:before {
        content: '⭐';  // Nigerian star symbol
        margin-right: 1rem;
      }

      @media (min-width: 768px) {
        font-size: 1.2rem;
        padding: 1.5rem;
      }
    }
  }

  &:hover .NigerianFlag {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  li {
    font-size: 1rem;
    padding: 1rem;
    line-height: 1.6;
    background: rgba(0, 135, 81, 0.05);
    border-radius: 12px;
    border: 1px solid rgba(0, 135, 81, 0.1);
    display: flex;
    align-items: flex-start;
    color: ${colors.lightText};
    transition: all 0.3s ease;
    word-break: break-word;
    
    &:hover {
      transform: translateX(5px);
      background: rgba(0, 135, 81, 0.08);
      border-color: ${colors.green};
    }
  }
`;

export default PitchDeck; 