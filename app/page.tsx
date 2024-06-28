import Image from 'next/image';

import img1 from './image-1.gif';
import img2 from './image-2.png';
import img3 from './image-3.png';
import img4 from './image-4.png';
import img5 from './image-5.png';
import caImg from './ca.png';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Image
        src={img1}
        quality={100}
        priority
        unoptimized
        alt=''
        className='w-screen object-contain'
      />

      <div className='relative'>
        <Image
          src={img2}
          quality={100}
          priority
          placeholder='blur'
          alt=''
          className='w-screen object-contain'
        />
        <div className='absolute inset-0 flex flex-col'>
          <div className='flex gap-7 mt-10 ml-14 xl:multi-[`mt-16;ml-20`] xl:[&_img]:h-auto [&_img]:h-[80px]'>
            <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target='_x'>
              <img src='/twitter.svg' alt='' />
            </a>
            <a href={process.env.NEXT_PUBLIC_TELEGRAM_URL} target='_tele'>
              <img src='/telegram.svg' alt='' />
            </a>
          </div>
          <div className='mt-auto mb-10 px-5'>
            <h2 className='text-center text-white text-5xl sm:text-7xl'>
              -- OFFICIAL BURATINO CONTRACT --
            </h2>
            <div className='flex justify-center relative mt-10'>
              <Image src={caImg} alt='' className='hidden sm:block' />
              <div className='absolute inset-0 flex items-center justify-center'>
                <p className='text-center text-primary text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] break-all'>
                  TBA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='relative'>
        <Image
          src={img3}
          quality={100}
          priority
          placeholder='blur'
          alt=''
          className='w-screen object-contain'
        />
        <div className='absolute inset-0'>
          <div className='max-xl:pl-10 absolute right-5 bottom-5 sm:bottom-10 md:bottom-20 w-full max-w-[845px] text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center space-y-5 sm:space-y-10 max-xl:text-pretty'>
            <p>
              Get a share of Earth's richest man -now with a goated contract
              address!
            </p>
            <p>
              Starting with 69420, sacred number on Xand previous cycle top,
              $ELON contractstands superior among its peers.
            </p>
            <p>Wanna stop missing out?</p>
          </div>
        </div>
      </div>

      <div className='relative'>
        <Image
          src={img4}
          quality={100}
          priority
          placeholder='blur'
          alt=''
          className='w-screen object-contain'
        />
        <div className='absolute inset-0'>
          <div className='text-primary lg:mt-20 lg:ml-20 uppercase text-center inline-block max-lg:multi-[`text-center;w-full;pt-10`]'>
            <h2 className='text-7xl sm:text-8xl md:text-9xl'>tokenomics</h2>
            <p className='text-6xl sm:text-7xl md:text-8xl'>
              supply: 200.000.000
            </p>
            <p className='text-6xl sm:text-7xl'>no tax - no bullshit</p>
          </div>
        </div>
      </div>

      <div className='relative'>
        <Image
          src={img5}
          quality={100}
          priority
          placeholder='blur'
          alt=''
          className='w-screen object-contain'
        />
        <div className='absolute inset-0 flex justify-center items-baseline'>
          <a
            href={process.env.NEXT_PUBLIC_COIN_URL}
            target='_buy'
            className='px-5 sm:px-0'
          >
            <img src='/buy-now.svg' alt='' className='-translate-y-1/2' />
          </a>
        </div>
      </div>
    </main>
  );
}
