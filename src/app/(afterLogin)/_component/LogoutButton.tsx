'use client';

import { IoPersonCircle } from 'react-icons/io5';

export default function LogoutButton() {
  const me = {
    nickname: '밍그레',
    id: 'mingr8',
  };
  const onLogout = () => {};

  return (
    <div className="my-3">
      <button
        onClick={onLogout}
        className="flex p-3 w-full items-center h-[65px] rounded-full hover:bg-opacity-80 hover:bg-zinc-800"
      >
        <IoPersonCircle className="text-[40px]" />
        {/* <div className='w-[40px] h-[40px]'>
        <img src={me.image} alt={me.id} />
      </div> */}
        <div className="flex flex-col m-3 text-[15px] text-left">
          <div className="font-bold">{me.nickname}</div>
          <div className="text-neutral-500">@{me.id}</div>
        </div>
      </button>
    </div>
  );
}
