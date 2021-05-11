import { tw } from 'twind';
import Button from '@/components/button';
import Link from 'next/link'


const Footer = () => (
  <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
    <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`)}>
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
);

export default Footer;
