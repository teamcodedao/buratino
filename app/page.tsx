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
            <a href='/' target='_x'>
              <img src='/twitter.svg' alt='' />
            </a>
            <a href='/' target='_tele'>
              <img src='/telegram.svg' alt='' />
            </a>
          </div>
          <div className='mt-auto mb-10 px-5 sm:px-10 xl:px-0'>
            <h2 className='text-center text-white text-4xl sm:text-5xl xl:text-7xl'>
              -- OFFICIAL BURATINO CONTRACT --
            </h2>
            <div className='flex justify-center relative mt-10'>
              <Image src={caImg} alt='' className='hidden sm:block' />
              <div className='absolute inset-0 flex items-center justify-center'>
                <p className='text-center text-primary text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] break-all'>
                  0x69420E3A3aa9E17Dea102Bb3a9b3B73dcDDB9528
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
