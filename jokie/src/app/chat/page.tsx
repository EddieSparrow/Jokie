import Link from 'next/link';

export default function Chat() {
  return (
    <main className="bg-main-gradient min-h-screen p-[30px] pb-[25px]">
      <Link href="/">
        <button className="btn w-[50px] h-[50px] bg-arrow bg-auto bg-no-repeat bg-center" />
      </Link>
    </main>
  );
}
