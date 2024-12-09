'use client';

import { useState } from 'react';

export default function Tab() {
  const [tab, setTab] = useState('forYou');

  const onChangeTab = (type: string) => () => {
    if (type === 'forYou') setTab('forYou');
    else if (type === 'following') setTab('following');
  };

  return (
    <div
      className="flex bg-opacity-50 sticky top-0 z-10 border-b border-b-neutral-700 items-center backdrop-blur-md"
      style={{ width: 'inherit' }}
    >
      <div
        onClick={onChangeTab('forYou')}
        className="flex-grow flex items-center justify-center min-w-14 h-[53px] px-4 hover:bg-zinc-700 hover:bg-opacity-30 cursor-pointer"
      >
        <div className="flex-col py-4 relative">
          <span
            className={`text-[15px] font-bold ${
              tab === 'forYou' ? 'text-inherit' : 'text-zinc-500'
            }`}
          >
            For you
          </span>
          {tab === 'forYou' && (
            <div className="bg-blue-500 rounded-full h-1 absolute bottom-0 w-full"></div>
          )}
        </div>
      </div>
      <div
        onClick={onChangeTab('following')}
        className="flex-grow flex items-center justify-center min-w-14 h-[53px] px-4 hover:bg-zinc-700 hover:bg-opacity-30 cursor-pointer"
      >
        <div className="flex-col py-4 relative">
          <span
            className={`text-[15px] font-bold ${
              tab === 'following' ? 'text-inherit' : 'text-zinc-500'
            }`}
          >
            Following
          </span>
          {tab === 'following' && (
            <div className="bg-blue-500 rounded-full h-1 absolute bottom-0 w-full"></div>
          )}
        </div>
      </div>
    </div>
  );
}
