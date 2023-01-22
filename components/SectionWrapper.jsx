import React from 'react';

const SectionWrapper = ({ children, id, sectionStyle, innerDivStyle }) => {
  return (
    <section 
    id={id} 
    className={`flex justify-center my-48 xl:my-0  ${sectionStyle}`}
    >
      <div 
      className={`xl:my-36 ${innerDivStyle}`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;