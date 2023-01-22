import React from 'react';

const SectionWrapper = ({ children, id, sectionStyle, innerDivStyle }) => {
  return (
    <section 
    id={id} 
    className={`flex justify-center ${sectionStyle}`}
    >
      <div 
      className={`my-36 ${innerDivStyle}`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;