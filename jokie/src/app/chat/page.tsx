'use client';

import Selector from '@/components/Selector';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';

export default function Chat() {
  const [selected, setSelected] = useState<string>('');
  const [setup, setSetup] = useState('');
  const [punchline, setPunchline] = useState('');

  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await axios.get(`https://official-joke-api.appspot.com/jokes/${selected}/random`);
      return data;
    },
    onSuccess: (data) => {
      setSetup(data.setup);
      setPunchline(data.punchline);
    },
    onError: (error: Error) => {
      console.error('Error fetching joke:', error);
    },
  });

  function handleGetJoke() {
    mutation.mutate();
  }

  return (
    <main className="flex flex-col bg-main-gradient min-h-screen p-[30px] pb-[25px] align-center justify-between">
      <div className="flex justify-between">
        <Link href="/">
          <button className="btn text-center w-[50px] h-[50px] bg-arrow bg-auto bg-no-repeat bg-center" />
        </Link>
        <Selector selected={selected} setSelected={setSelected}></Selector>
      </div>
      <button className="btn text-center h-[3.75rem] text-[2rem]" onClick={handleGetJoke}>
        Get joke
      </button>
    </main>
  );
}
