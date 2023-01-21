import React from 'react';
import { HSecondary } from './';

const Services = () => {
  return (
    <section
      id='služby'
      className='flex justify-center my-48 mx-8 md:mx-16 lg:mx-36'
    >
      <div className='bg-primary-50 flex flex-col xl:flex-row my-36 rounded-lg overflow-hidden shadow-xl'>
        <div
          className='p-8 lg:p-20 
          flex-1 flex flex-col justify-center order-2 xl:order-1'
        >
          <HSecondary additionalStyling='text-5xl mb-10'>Foukaná vata</HSecondary>
          <div
            className='text-primary-800 text-lg flex flex-col gap-4'
          >
            <p>
              Foukaná izolace je dnes již velmi dobře zavedená technologie zateplování konstrukcí. Izolační materiál je pneumaticky, pomocí hadice a vzduchu, nanášen i do hůře přístupných míst stavby. Při samotné instalaci izolace tak není potřeba nanášet velké balíky izolačního materiálu do budovy, ale je třeba zajistit pouze servisní otvory pro průchod foukací hadice.
            </p>
            <p>
              Foukané izolace se často používají jako oprava stávající izolace, která časem slehla a ztratila tak část své izolační schopnosti. Mezi konstrukcí a izolací vznikla mezera plná tepelných mostů, kterou lze nafoukáním izolace snadno vyplnit. Tím možnosti využití foukané vaty ale rozhodně nekončí. Lze ji využít i pro zavedení nové izolační vrstvy, která bude mít nepřekonatelné vlastnosti.
            </p>
            <p>
              Foukanou izolaci oceníte i v letním období, kdy chrání dům před přehříváním. V tomto případě je vhodné zateplit podlahu půdy - tím se teplo z přehřátého půdního prostoru nebude dostávat do obytné části. Je však možné zateplit i střešní šikminy do dutin vzniklých po zaklopení. Tak se teplo nedostane ani do půdního prostoru a tak si uchová příjemné prostředí.
            </p>
          </div>
        </div>

        <img
          src='/business/vata.png'
          alt='vata'
          className='flex-1 object-cover w-auto h-[200px] xl:h-auto xl:w-[300px] order-1 xl:order-2'
        />
      </div>
    </section>
  );
};

export default Services;