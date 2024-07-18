'use client';

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { useState } from 'react';

const people = [
  { id: 1, name: 'Programming' },
  { id: 2, name: 'Wade' },
  { id: 3, name: 'Tanya' },
  { id: 4, name: 'Arlene' },
  { id: 5, name: 'Devon' },
];

export default function Selector() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="w-[260px]">
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton className={clsx('flex relative items-center btn h-[50px] w-full rounded-lg bg-black py-[0.8125rem] px-[1.5625rem] text-left text-[1.25rem] text-black', 'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25')}>
          <p>{selected.name}</p>
          <ChevronDownIcon className="group pointer-events-none absolute top-3 right-5 size-6 fill-white" aria-hidden="true" />
        </ListboxButton>
        <ListboxOptions anchor="bottom" transition className={clsx('w-[var(--button-width)] rounded-xl border border-black/5 bg-black/5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none', 'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0')}>
          {people.map((person) => (
            <ListboxOption key={person.name} value={person} className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-black/10">
              <CheckIcon className="invisible size-5 fill-black group-data-[selected]:visible" />
              <div className="text-sm/6 text-black">{person.name}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
