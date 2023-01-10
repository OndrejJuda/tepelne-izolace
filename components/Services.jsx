import React from 'react';

const services = [
  {
    title: 'Foukaná izolace',
    descriptions: [
      `Sit duis et ex ullamco. Sit aliquip officia nisi esse sint ea non. Culpa eiusmod sint voluptate sit laboris qui ut excepteur occaecat ad aute ea velit consectetur. Proident fugiat nisi magna labore esse cillum ea nostrud sint irure veniam. Id consectetur velit deserunt nulla id consectetur Lorem mollit consectetur ex minim nulla mollit minim.`,
      `Ea quis sint do Lorem anim minim ullamco eiusmod consequat aute quis esse. Sit sunt voluptate sint cillum anim et culpa in. Nostrud officia ullamco esse enim. Sint duis consequat commodo occaecat do commodo velit. Sunt occaecat minim cupidatat Lorem aute aute elit ad magna commodo consectetur in sunt deserunt. Pariatur adipisicing magna proident qui eu sint occaecat magna veniam sunt. Enim ea amet nulla fugiat id fugiat nulla aliquip voluptate occaecat do deserunt consectetur aute.`
    ]
  },
  {
    title: 'Zateplení minerální foukanou vatou',
    descriptions: [
      `Sit duis et ex ullamco. Sit aliquip officia nisi esse sint ea non. Culpa eiusmod sint voluptate sit laboris qui ut excepteur occaecat ad aute ea velit consectetur. Proident fugiat nisi magna labore esse cillum ea nostrud sint irure veniam. Id consectetur velit deserunt nulla id consectetur Lorem mollit consectetur ex minim nulla mollit minim.`,
      `Ea quis sint do Lorem anim minim ullamco eiusmod consequat aute quis esse. Sit sunt voluptate sint cillum anim et culpa in. Nostrud officia ullamco esse enim. Sint duis consequat commodo occaecat do commodo velit. Sunt occaecat minim cupidatat Lorem aute aute elit ad magna commodo consectetur in sunt deserunt. Pariatur adipisicing magna proident qui eu sint occaecat magna veniam sunt. Enim ea amet nulla fugiat id fugiat nulla aliquip voluptate occaecat do deserunt consectetur aute.`
    ]
  },
  {
    title: 'Termokamera pro diagnostiku budov',
    descriptions: [
      `Sit duis et ex ullamco. Sit aliquip officia nisi esse sint ea non. Culpa eiusmod sint voluptate sit laboris qui ut excepteur occaecat ad aute ea velit consectetur. Proident fugiat nisi magna labore esse cillum ea nostrud sint irure veniam. Id consectetur velit deserunt nulla id consectetur Lorem mollit consectetur ex minim nulla mollit minim.`,
      `Ea quis sint do Lorem anim minim ullamco eiusmod consequat aute quis esse. Sit sunt voluptate sint cillum anim et culpa in. Nostrud officia ullamco esse enim. Sint duis consequat commodo occaecat do commodo velit. Sunt occaecat minim cupidatat Lorem aute aute elit ad magna commodo consectetur in sunt deserunt. Pariatur adipisicing magna proident qui eu sint occaecat magna veniam sunt. Enim ea amet nulla fugiat id fugiat nulla aliquip voluptate occaecat do deserunt consectetur aute.`
    ]
  },
];

const Services = () => {
  return (
    <section id='služby'>
      <ul>
        {
          services.map(({title, descriptions}) => (
            <li key={title}>
              <p>{title}</p>
              {
                descriptions.map((text, index) => (
                  <p key={index}>{text}</p>
                ))
              }
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default Services;