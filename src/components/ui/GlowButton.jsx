import React from 'react';

const GlowButton = ({ children, onClick, variant = 'primary', className = '', icon: Icon }) => {
  const variants = {
    primary: 'bg-cyber-blue text-dark-bg hover:bg-cyan-400',
    secondary: 'bg-transparent border-2 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-dark-bg',
    purple: 'bg-cyber-purple text-white hover:bg-purple-600'
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${variants[variant]}
        px-6 py-3 rounded-lg font-medium
        transition-all duration-300
        flex items-center gap-2
        shadow-lg hover:shadow-cyber-blue/50
        ${className}
      `}
    >
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
};

export default GlowButton;