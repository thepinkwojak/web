import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Netlify from '@/constants/svg/netlify.svg';
import Nike from '@/constants/svg/nike.svg';
import Figma from '@/constants/svg/figma.svg';
import Aws from '@/constants/svg/aws.svg';
import React from 'react';
import Link from 'next/link'

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <img src="w.png" className={tw('mx-auto mb-5')} />

    <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(` text-center text-xl lg:text-3xl text-pink-500`)}>
          THE <b>$PINK</b> WOJAK TOKEN
        </p>
      </div>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
        A win for those who have been losing
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>

        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto lg:flex-row sm:flex-col`)}>
        <Link href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x96CCd249914576b78DBA996A51693124591415AC">
          <a target="_blank">
            <Button primary modifier={'mr-4 sm:mb-4'} >Buy on pancakeswap</Button>
          </a>
        </Link>

        <div className={tw(`sm:flex-row`)}>
        <Link href="https://charts.bogged.finance/?token=0x96CCd249914576b78DBA996A51693124591415AC">
          <a target="_blank">
            <Button  modifier={'mr-4 sm:mb-4'} >Chart</Button>
          </a>
        </Link>

        <Link href="https://t.me/thepinkwojaktoken">
          <a target="_blank">
            <Button  modifier={'mr-4'} >Join telegram</Button>
          </a>
        </Link>
        </div>
      </div>
    </div>

  </header>
);

export default Header;
