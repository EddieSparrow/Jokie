'use client';

import { Messages } from './Messages.interface';

interface MessageProps {
  message: Messages;
}

export default function Message({ message }: MessageProps) {
  return (
    <>
      <MessageTypeJoke typeJoke={message.typeJoke} />
      <MessageJoke setup={message.setup} punchline={message.punchline} />
    </>
  );
}

function MessageTypeJoke(props: Messages) {
  if (!props.typeJoke) {
    return null;
  }

  return (
    <div className="flex justify-end sm:justify-start">
      <div className="flex flex-col p-3 rounded-[10px] bg-beige w-[20.625rem] sm:w-auto">
        <p className="font-medium text-black leading-[1.1875rem]">Generate random {props.typeJoke} joke</p>
      </div>
    </div>
  );
}

function MessageJoke(props: Messages) {
  if (!props.setup || !props.punchline) {
    return null;
  }

  return (
    <div className="flex flex-col mr-[2.0625rem] sm:mr-0 gap-[0.9375rem] sm:gap-[1.25rem]">
      <div className="message-container">
        <p className="message-name">Jokie</p>
        <p className="message-text">{props.setup}</p>
      </div>
      <div className="message-container">
        <p className="message-name">Jokie</p>
        <p className="message-text">{props.punchline}</p>
      </div>
    </div>
  );
}
