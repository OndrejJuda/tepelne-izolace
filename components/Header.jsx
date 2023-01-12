import React from 'react';
import Link from 'next/link';

const links = [
  { id: '#kontakty', title: 'Kontakt' },
  { id: '#benefity', title: 'Proč nás?' },
  { id: '#služby', title: 'Služby' },
  { id: '#proces', title: 'Proces' },
  { id: '#reference', title: 'Reference' },
];

const Header = () => {
  return (
    <header
      className='flex justify-around items-center p-8'
    >
      <img src='/logo-name.png' alt='logo' width={300} />
      <nav className=''>
        <ul className='flex justify-center items-center gap-12'>
          {
            links.map(({ id, title }) => (
              <li
                key={id}
                className='text-primary-500 text-xl font-semibold group relative overflow-hidden'
              >
                <Link href={id}>
                  {title}
                </Link>
                <div className='w-full h-[2px] bg-primary-500 -translate-x-[100%] group-hover:translate-x-0 transition' />
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
};

export default Header;