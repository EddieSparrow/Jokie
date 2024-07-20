'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-main-gradient sm:justify-center sm:gap-[4.5625rem]">
      <div className="flex flex-col items-center pt-[12.5625rem] gap-3.5 sm:pt-0">
        <Image src="/smile.svg" alt="Smile" width={300} height={300} style={{ maxWidth: 'none' }} />
        <p className="font-bold text-black text-big text-start leading-[3.0625rem]">Jokie</p>
      </div>
      <Link href="chat">
        <button className="btn text-big text-white w-[23.125rem] h-[5rem] mb-[3.75rem] sm:mb-0">GO</button>
      </Link>
    </div>
  );
}
