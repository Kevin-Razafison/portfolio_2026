import React from 'react';

const BentoCard = ({ 
  children, 
  className = '', 
  size = 'medium',
  glow = false 
}) => {
  const sizes = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 md:col-span-2 row-span-1',
    large: 'col-span-1 md:col-span-2 lg:col-span-3 row-span-2',
    tall: 'col-span-1 row-span-2'
  };

  return (
    <div
      className={`
        ${sizes[size]}
        glass-effect rounded-2xl p-6
        card-hover
        ${glow ? 'glow-border' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default BentoCard;