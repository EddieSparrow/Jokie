'use client';

import { MessagesProps } from '@/interfaces/messages';

export default function ChatWindow({ messages }: MessagesProps) {
  return (
    <div className="flex flex-col flex-grow gap-[20px] h-full justify-end">
      {messages.map((message, index) => (
        <>
          <div key={index} className="flex flex-col w-max p-3 rounded-[10px] font-medium bg-beige">
            <p>Generate random {message.typeJoke} joke</p>
          </div>
          <div key={index} className="flex flex-col w-max p-3 rounded-[10px] bg-white">
            <p className="text-black text-base font-semibold">Jokie</p>
            <p>{message.setup}</p>
          </div>
          <div key={index} className="flex flex-col w-max p-3 rounded-[10px] bg-white">
            <p className="text-black text-base font-semibold">Jokie</p>
            <p>{message.punchline}</p>
          </div>
        </>
      ))}
    </div>
  );
}
