import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-2 section-container">
      <div className="flex justify-center">
        <img 
          src="https://drprecoce.com/wp-content/uploads/2025/05/icon-gold.png" 
          alt="Dr. Precoce" 
          className="h-16 md:h-20"
        />
      </div>
    </header>
  );
};

export default Header;