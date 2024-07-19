'use client';

import { MessagesProps } from '@/interfaces/messages';
import Message from './Message';

export default function ChatWindow({ messages }: MessagesProps) {
  return (
    <div className="flex flex-col flex-grow gap-[0.9375rem] md:gap-[1.25rem] h-full justify-end sm:pl-[7px] md:pl-0">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
}
