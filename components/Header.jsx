import React from 'react';

const Header = () => {
  return (
    <header className='flex'>
      <img src='/logo.png' alt='logo' width={64} height={64} />
      <nav className='ml-auto'>
        <ul className='flex'>
          <li>Kontakt</li>
          <li>Proč nás?</li>
          <li>Služby</li>
          <li>Proces</li>
          <li>Reference</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;