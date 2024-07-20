'use client';

import { MessagesProps } from '../messages/Messages.interface';
import Message from '../messages/Message';

export default function ChatWindow({ messages }: MessagesProps) {
  return (
    <div className="flex flex-col flex-grow gap-[0.9375rem] sm:gap-[1.25rem] h-full justify-end pl-[7px] sm:pl-0">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
}
