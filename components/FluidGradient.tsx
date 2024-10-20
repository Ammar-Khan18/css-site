const FluidGradient = () => {
    return (
      <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
        <defs>
          <linearGradient id="fluidGradient" gradientTransform="rotate(70)">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="25%" stopColor="#6102D3" />
            <stop offset="50%" stopColor="#A6176F" />
            <stop offset="75%" stopColor="#EE76E1" />
            <stop offset="100%" stopColor="#D9EA12" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#fluidGradient)" />
      </svg>
    );
  };
  
  export default FluidGradient;
  