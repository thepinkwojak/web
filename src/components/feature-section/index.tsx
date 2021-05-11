import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Link from 'next/link';
import Button from '../button';

const FeatureSection = () => (
  <section className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-pink-600 font-semibold tracking-wide uppercase`)}>FUCK DOG COINS</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
            Anti-Rug & Anti-Whale
          </p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8 flex flex-col`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-pink-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Ownership renounced & No Pre-Sale</div>
            </div>
            <div className={tw(`leading-loose text-gray-500 flex-1 flex flex-col`)}>
              <p className={tw(`mb-4`)}>The creator has renounced his ownership rights, making this truly /our/ token.</p>

              <br />
              <br />
              <Link href="https://bscscan.com/tx/0x1a83b749eb6c2a5189b41c21cebd055396afcd38ca65381b9cd050ac8c8c8aab">
                <a target="_blank" className={tw('mt-auto block')}>
                  <Button>Proof</Button>
                </a>
              </Link>
            </div>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8 flex flex-col`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-pink-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Liquidity Locked & Growing</div>
            </div>
            <div className={tw(`leading-loose text-gray-500 flex-1 flex flex-col`)}>
              <p className={tw(`mb-4`)}>Initial liquidity locked & and growing with every transaction!</p>
              <Link href="https://bscscan.com/tx/0x562262bae1d66bf0caedcff96f63532774ab8e3d9fb2f3025b9a00c5acf9d2c9">
                <a target="_blank" className={tw('mt-auto block')}>
                  <Button>Proof</Button>
                </a>
              </Link>
            </div>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-pink-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Contract Verified</div>
            </div>
            <div className={tw(`leading-loose text-gray-500 flex-1 flex flex-col`)}>
              <p className={tw(`mb-4`)}>Contract verified and rug checked. Owners' wallets are visible on BscScan, with a fantastic token distribution scheme.</p>
              <br />
              <br />
              <Link href="https://bscscan.com/address/0x96CCd249914576b78DBA996A51693124591415AC#code">
                <a target="_blank" className={tw('mt-auto block')}>
                  <Button>Proof</Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
