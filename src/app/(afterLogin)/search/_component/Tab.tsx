'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function Tab() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [tab, setTab] = useState('top');

  const onChangeTab = (tab: string) => () => {
    setTab(tab);

    if (tab === 'top') {
      router.replace(`/search?q=${searchParams.get('q')}`);
    } else {
      router.replace(`/search?${searchParams.toString()}&f=live`);
    }
  };

  return (
    <div
      className="flex bg-opacity-50 sticky top-0 z-10 border-b border-b-neutral-700 items-center backdrop-blur-md"
      style={{ width: 'inherit' }}
    >
      <div
        onClick={onChangeTab('top')}
        className="flex-grow flex items-center justify-center min-w-14 h-[53px] px-4 hover:bg-zinc-700 hover:bg-opacity-30 cursor-pointer"
      >
        <div className="flex-col py-4 relative">
          <span
            className={`text-[15px] font-bold ${
              tab === 'top' ? 'text-inherit' : 'text-zinc-500'
            }`}
          >
            Top
          </span>
          {tab === 'top' && (
            <div className="bg-blue-500 rounded-full h-1 absolute bottom-0 w-full"></div>
          )}
        </div>
      </div>
      <div
        onClick={onChangeTab('latest')}
        className="flex-grow flex items-center justify-center min-w-14 h-[53px] px-4 hover:bg-zinc-700 hover:bg-opacity-30 cursor-pointer"
      >
        <div className="flex-col py-4 relative">
          <span
            className={`text-[15px] font-bold ${
              tab === 'latest' ? 'text-inherit' : 'text-zinc-500'
            }`}
          >
            Latest
          </span>
          {tab === 'latest' && (
            <div className="bg-blue-500 rounded-full h-1 absolute bottom-0 w-full"></div>
          )}
        </div>
      </div>
    </div>
  );
}
