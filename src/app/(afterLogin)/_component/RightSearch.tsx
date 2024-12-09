'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiCheck } from 'react-icons/hi';
import SearchForm from './SearchForm';

export default function RightSearch() {
  const pathname = usePathname();
  const [selected, setSelected] = useState('anyone');

  const onChangeFollow = () => {};

  const onChangeAll = () => {};

  if (pathname === '/explore') return null;

  if (pathname === '/search') {
    return (
      <>
        <div className="my-4 py-3 px-4 border border-solid border-zinc-700 rounded-2xl">
          <h2 className="font-extrabold text-xl">Search filters</h2>
        </div>
        <div className="mb-4 py-3 px-4 border border-solid border-zinc-700 rounded-2xl">
          <div className="leading-5 break-words pb-1 font-bold text-[15px]">
            People
          </div>
          <label className="flex items-center cursor-pointer justify-between py-1">
            <input
              type="radio"
              name="options"
              value="anyone"
              checked={selected === 'anyone'}
              onChange={(e) => setSelected(e.target.value)}
              className="hidden"
            />
            <span className="font-medium">From anyone</span>
            <div
              className={`w-5 h-5 flex items-center justify-center rounded-full border-2 ${
                selected === 'anyone'
                  ? 'border-blue-500 bg-blue-500'
                  : 'border-zinc-500'
              }`}
            >
              {selected === 'anyone' && <HiCheck className="text-white" />}
            </div>
          </label>
          <label className="flex items-center cursor-pointer justify-between py-1">
            <input
              type="radio"
              name="options"
              value="follow"
              checked={selected === 'follow'}
              onChange={(e) => setSelected(e.target.value)}
              className="hidden"
            />
            <span className="font-medium">People you follow</span>
            <div
              className={`w-5 h-5 flex items-center justify-center rounded-full border-2 ${
                selected === 'follow'
                  ? 'border-blue-500 bg-blue-500'
                  : 'border-zinc-500'
              }`}
            >
              {selected === 'follow' && <HiCheck className="text-white" />}
            </div>
          </label>
        </div>
      </>
    );
  }

  return (
    <div className="mb-[72px]">
      <div className="w-[350px] h-[53px] fixed bg-neutral-950">
        <SearchForm />
      </div>
    </div>
  );
}
