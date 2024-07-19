'use client';

import { MessagesProps } from '@/interfaces/messages';
import Message from './Message';

export default function ChatWindow({ messages }: MessagesProps) {
  return (
    <div className="flex flex-col flex-grow gap-[20px] h-full justify-end">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
}
