import { tw } from 'twind';
import Button from '@/components/button';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import axios from 'axios';


const Footer = () => {
  const [index, setIndex] = useState({})
  useEffect(() => {
    ;(async() => {
      const { data } = await axios.get('https://api.wojakindex.biz/current_wojak_index.json')
      data.pink_wojak_index = data.pink_wojak_index.toFixed(2)
      setIndex(data)
    })()
  }, [])

  return (
  <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
    <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`)}>
      <div className={tw(`text-center w-full mb-20`)}>
        <span className={tw(`font-sans  text-4xl text-pink-500 block`)}>Wojak Index</span>
        {/** @ts-ignore */}
        <div className={tw(`font-sans font-bold text-6xl text-pink-500 mt-2 block`)}>{index.pink_wojak_index}</div>
      </div>
      <div className={tw(`mb-14 flex items-center w-full text-center`)}>
          <h2 className={tw(`font-sans font-bold text-4xl`)}>join our community</h2>
          <div className={tw(`ml-auto`)}>
          <Link href="https://t.me/thepinkwojaktoken">
          <a target="_blank">
            <Button  modifier={'mr-4'} >telegram</Button>
          </a>
        </Link>

        <Link href="https://discord.gg/r8Y4Cgzv#
">
          <a target="_blank">
            <Button  modifier={'mr-4'} >discord</Button>
          </a>
        </Link>
          </div>
      </div>
    </div>
  </footer>
)
}

export default Footer;
