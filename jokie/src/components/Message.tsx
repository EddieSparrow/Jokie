'use client';

import { Messages } from '@/interfaces/messages';

interface MessageProps {
  message: Messages;
}

export default function Message({ message }: MessageProps) {
  return (
    <>
      {message.typeJoke && (
        <div className="flex justify-end md:justify-start">
          <div className="flex flex-col w-max p-3 rounded-[10px] bg-beige sm:w-[20.625rem] md:w-auto">
            <p className="font-medium text-black leading-[1.1875rem]">Generate random {message.typeJoke} joke</p>
          </div>
        </div>
      )}
      {message.setup && (
        <div className="flex flex-col sm:mr-[2.0625rem] md:mr-0 gap-[0.9375rem] md:gap-[1.25rem]">
          <div className="message-container">
            <p className="message-name">Jokie</p>
            <p className="message-text">{message.setup}</p>
          </div>
          <div className="message-container">
            <p className="message-name">Jokie</p>
            <p className="message-text">{message.punchline}</p>
          </div>
        </div>
      )}
    </>
  );
}
