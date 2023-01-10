import React from 'react';
import {CTAButton} from './';

const processSteps = [
  {icon: 'ICON', title: 'První kontakt', descripton: 'Nostrud elit sunt mollit reprehenderit adipisicing quis cupidatat dolor enim sit.'},
{icon: 'ICON', title: 'Příprava realizace', descripton: 'Ullamco adipisicing ullamco minim deserunt aliquip dolore nisi amet dolor ad ipsum.'},
  {icon: 'ICON', title: 'Realizace', descripton: 'Lorem sint sit magna ea duis.'},
  {icon: 'ICON', title: 'Doladění detailů', descripton: 'Dolore cupidatat laboris cillum fugiat nulla dolore adipisicing.'},
  {icon: 'ICON', title: 'Dokončení izolace', descripton: 'Sit quis laborum elit dolore veniam tempor ex nostrud dolore ullamco ipsum labore proident.'},
];

const Process = () => {
  return (
    <section id='proces'>
      <ul className='flex gap-16 flex-wrap'>
        {
          processSteps.map(({ icon, title, descripton }) => (
            <li 
            key={title}
            className='flex-1'
            >
              <img src={icon} alt={icon} />
              <p>{title}</p>
              <p>{descripton}</p>
            </li>
          ))
        }
      </ul>
      <CTAButton>Nezávazná poptávka</CTAButton>
    </section>
  );
};

export default Process;