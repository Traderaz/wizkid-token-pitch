const theme = {
  colors: {
    primary: '#4B0082', // Deep purple for Wizkid's brand
    secondary: '#FFD700', // Gold accent
    background: '#0A0A0F', // Darker, richer background
    text: '#FFFFFF',
    accent: '#E5C07B',
    gradient: {
      primary: 'linear-gradient(135deg, #4B0082 0%, #800080 100%)',
      secondary: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
      card: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)'
    },
    glass: {
      background: 'rgba(255, 255, 255, 0.03)',
      border: 'rgba(255, 255, 255, 0.1)'
    }
  },
  shadows: {
    card: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
    text: '0 0 20px rgba(255, 215, 0, 0.3)'
  },
  fonts: {
    heading: "'Clash Display', sans-serif",
    body: "'Inter', sans-serif"
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px'
  }
};

export default theme; 