import { tw } from 'twind';
import Particles from 'react-particles-js';
import Arrow from '@/constants/svg/arrow.svg';
import React from 'react';
import Link from 'next/link'
import Button from '../button';

const ParticleBg = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 10000,
          density: {
            enable: true,
            value_area: 3000,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          direction: `right`,
          speed: 0.3,
        },
        size: {
          value: 1,
        },
        opacity: {
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
          },
        },
      },
      interactivity: {
        events: {
          onclick: {
            enable: false,
          },
        },
      },
      retina_detect: true,
    }}
  />
);

const CasesSection = () => (
  <section>
    <div className={tw(`w-full bg-pink-600 relative`)}>
      <div className={tw(`absolute left-0 top-0  w-full overflow-hidden`)} style={{ height: '100%'}}>
        <ParticleBg />
      </div>
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto pt-20 pb-20 lg:pt-40 lg:pb-40 text-center`)} style={{ zIndex: 1, position: 'relative'}}>
        <h1 className={tw(`text-white text-4xl lg:text-7xl font-bold text-center`)}>We are all gonna make it</h1>
        <p className={tw(`text-white text-center text-xl mt-12`)}>
          Don’t just take our word for it go on 4chan and count the pink wojaks from other coins.
        </p>
        <Link href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x96CCd249914576b78DBA996A51693124591415AC">
          <a target="_blank" className={tw('mx-auto pt-10')} style={{ display: 'block'}}>
            <Button primary modifier={'mx-auto'} >Buy on pancakeswap</Button>
          </a>
        </Link>
      </div>

    </div>
  </section>
);

export default CasesSection;
