'use client';

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from './Loading';

interface SelectorProps {
  selected?: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

async function fetchJokes() {
  const { data } = await axios.get('https://official-joke-api.appspot.com/types');
  return data;
}

export default function Selector({ selected, setSelected }: SelectorProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['jokesTypes'],
    queryFn: fetchJokes,
  });

  useEffect(() => {
    if (data) {
      setSelected(data[0]);
    }
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <h1>Error!</h1>;
  }

  if (!data) {
    return <h1>No data</h1>;
  }

  return (
    <div className="w-[260px]">
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton className={clsx('flex relative capitalize items-center btn h-[50px] w-full rounded-lg bg-black py-[0.8125rem] px-[1.5625rem] text-left text-[1.25rem] text-black', 'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25')}>
          <p>{selected}</p>
          <ChevronDownIcon className="group pointer-events-none absolute top-3 right-5 size-6 fill-white" aria-hidden="true" />
        </ListboxButton>
        <ListboxOptions anchor="bottom" transition className={clsx('w-[var(--button-width)] rounded-xl border border-black/5 bg-black/5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none', 'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0')}>
          {data.map((jokeType: string) => (
            <ListboxOption key={jokeType} value={jokeType} className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-black/10">
              <CheckIcon className="invisible size-5 fill-black group-data-[selected]:visible" />
              <div className="text-sm/6 text-black capitalize">{jokeType}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
