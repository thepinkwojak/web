import { tw } from 'twind';
import Particles from 'react-particles-js';
import Arrow from '@/constants/svg/arrow.svg';
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Button from '../button';
import axios from 'axios'



const ParticleBg = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get(`https://api.wojakindex.biz/pink_wojaks.json`)

      // @ts-ignore
      let i = data.map(({ filename }) => {
        return {
          src: `https://www.wojakindex.biz/image_mirror/${filename}`,
          width: 200,
          height: 200
        }
      })

      setImages(i)
      setLoading(false)

    })()
  }, [])
  return loading ? <div /> : (
      <Particles
        params={{
          particles: {
            shape: {
              type: 'images',
              image: images
          },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 3,
            },
            size: {
              value: 65,
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
    )
  }

const CasesSection = () => (
  <section>
    <div className={tw(`w-full bg-pink-600 relative`)}>
      <div className={tw(`absolute left-0 top-0  w-full overflow-hidden`)} style={{ height: '100%'}}>
        <ParticleBg />
      </div>
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto pt-20 pb-20 lg:pt-40 lg:pb-40 text-center`)} style={{ zIndex: 1, position: 'relative'}}>
        <h1 className={tw(`text-white text-4xl lg:text-7xl font-bold text-center`)}>We are all gonna make it</h1>
        <Link href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x96CCd249914576b78DBA996A51693124591415AC">
          <a target="_blank" className={tw('mx-auto pt-10')} style={{ display: 'block'}}>
            <Button primary modifier={'mx-auto'} >BUY ON PANCAKESWAP</Button>
          </a>
        </Link>
      </div>

    </div>
  </section>
);

export default CasesSection;
