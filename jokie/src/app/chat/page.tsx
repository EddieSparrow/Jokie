import Selector from '@/components/Selector';
import Link from 'next/link';

export default function Chat() {
  return (
    <main className="flex justify-between	bg-main-gradient min-h-screen p-[30px] pb-[25px]">
      <Link href="/">
        <button className="btn text-center w-[50px] h-[50px] bg-arrow bg-auto bg-no-repeat bg-center" />
      </Link>
      <Selector></Selector>
    </main>
  );
}
