'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MdVerified } from 'react-icons/md';

export default function FollowRecommend() {
  const onFollow = () => {};

  const user = {
    id: 'Bill Gates',
    nickName: 'BillGates',
    image: '/bill.jpg',
  };

  return (
    <Link href={`/${user.id}`} className="flex items-center">
      <div className="flex items-center w-full">
        <div className="rounded-full m-auto overflow-hidden mr-2">
          <Image src={user.image} alt={user.id} width={40} height={40} />
        </div>
        <div className="flex-col text-[15px] grow">
          <div className="flex items-center">
            <span className="font-bold mr-1">{user.id}</span>
            <MdVerified className="text-blue-500 text-lg" />
          </div>
          <div className="text-neutral-500 font-normal">@{user.nickName}</div>
        </div>
        <button
          onClick={onFollow}
          className="min-w-8 min-h-8 px-4 bg-zinc-200 text-black font-bold text-sm leading-4 rounded-full hover:bg-opacity-85"
        >
          Follow
        </button>
      </div>
    </Link>
  );
}
