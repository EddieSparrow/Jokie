'use client';

import Selector from '@/components/selector/Selector';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import ChatWindow from '@/components/chatWindow/ChatWindow';
import { Messages } from '@/components/messages/Messages.interface';
import Loading from '@/components/loading/Loading';
import { getRandomJoke } from '@/services/joke-api';

export default function Chat() {
  const [selected, setSelected] = useState('');
  const [setup, setSetup] = useState('');
  const [punchline, setPunchline] = useState('');
  const [messages, setMessages] = useState<Messages[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (setup && punchline) {
      setMessages((prevMessages) => [...prevMessages, { setup: setup, punchline: punchline, typeJoke: '' } as Messages]);
      setSetup('');
      setPunchline('');
    }
  }, [punchline, setup]);

  const mutation = useMutation({
    mutationFn: async () => {
      return getRandomJoke(selected);
    },
    onSuccess: (data) => {
      setSetup(data[0].setup);
      setPunchline(data[0].punchline);
      setIsLoading(false);
    },
    onError: (error: Error) => {
      console.error('Error fetching joke:', error);
      setIsLoading(false);
    },
  });

  function handleGetJoke() {
    setIsLoading(true);
    setMessages((prevMessages) => [...prevMessages, { setup: '', punchline: '', typeJoke: selected } as Messages]);
    mutation.mutate();
  }

  const canGetJoke = useMemo(() => !isLoading && selected, [isLoading, selected]);

  return (
    <div className="flex flex-col bg-main-gradient min-h-screen pb-[25px] pt-[30px] px-[30px] sm:p-[30px] align-center justify-between max-h-screen">
      <div className="flex justify-between">
        <Link href="/">
          <button className="btn text-center w-[50px] h-[50px] bg-arrow bg-auto bg-no-repeat bg-center" />
        </Link>
        <Selector selected={selected} setSelected={setSelected}></Selector>
      </div>
      <div className="flex flex-col flex-grow overflow-auto justify-end">
        <ChatWindow messages={messages} />
      </div>
      {canGetJoke ? (
        <button className="btn text-center text-[2rem] mt-[2.5rem] sm:mt-[1.875rem] h-[60px] sm:ml-[0.5rem] shrink-0" onClick={handleGetJoke}>
          Get joke
        </button>
      ) : (
        <Loading />
      )}
    </div>
  );
}
