import React from 'react';

const SectionWrapper = ({ children, id, sectionStyle, innerDivStyle }) => {
  return (
    <section
      id={id}
      className={`flex ${sectionStyle} bg-primary-25`}
    >
      <div
        className={` ${innerDivStyle}`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;