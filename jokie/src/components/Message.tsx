'use client';

import { Messages } from '@/interfaces/messages';

interface MessageProps {
  message: Messages;
}

export default function Message({ message }: MessageProps) {
  return (
    <>
      {message.typeJoke && (
        <div className="flex flex-col w-max p-3 rounded-[10px] font-medium bg-beige">
          <p>Generate random {message.typeJoke} joke</p>
        </div>
      )}
      {message.setup && (
        <>
          <div className="flex flex-col w-max p-3 rounded-[10px] bg-white">
            <p className="text-black text-base font-semibold">Jokie</p>
            <p>{message.setup}</p>
          </div>
          <div className="flex flex-col w-max p-3 rounded-[10px] bg-white">
            <p className="text-black text-base font-semibold">Jokie</p>
            <p>{message.punchline}</p>
          </div>
        </>
      )}
    </>
  );
}
