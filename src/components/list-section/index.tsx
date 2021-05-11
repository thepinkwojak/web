import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';

const listItems = [
  {
    title: `Anti-rug & Anti-Whale`,
    description: `100m max transaction`,
  },
  {
    title: `Developers`,
    description: `Pariatur consectetur laboris exercitation duis laboris.
    Commodo duis fugiat magna fugiat et ut anim elit. Tempor aute ex qui
    tempor tempor.`,
  },
  {
    title: `Product owners`,
    description: `Ullamco consectetur ipsum eiusmod nisi adipisicing sint anim
    dolore aute excepteur. Voluptate ea ullamco sunt eu elit qui aliquip.
    Adipisicing.`,
  },
];

const ListSection = () => (
  <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h2 className={tw(`text-base text-pink-600 font-semibold tracking-wide uppercase`)}>WAGMI</h2>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
          Tokenomics
        </p>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
      <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
            <img src={'w2.jpg'} width="100%" height="100%" />
          </div>
        </div>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <ul className={tw(`space-y-12`)}>
              <li className={tw(`flex -mx-4`)}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-pink-50 text-pink-500`)}
                  >
                    1
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>20,000,000,000 Supply</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>
                    Scarce supply.
                  </p>
                </div>
              </li>

              <li className={tw(`flex -mx-4`)}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-pink-50 text-pink-500`)}
                  >
                    2
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>100M max single transaction</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>
                      You can only buy & sell a maximum 100M per transaction keeping the whales from dumping to hard on you.
                  </p>
                </div>
              </li>

              <li className={tw(`flex -mx-4`)}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-pink-50 text-pink-500`)}
                  >
                    3
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>250M max wallet</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>
                    There is a maximum of 250M $PINK per wallet.
                  </p>
                </div>
              </li>

          </ul>
        </div>

      </div>
    </div>
  </section>
);

export default ListSection;
