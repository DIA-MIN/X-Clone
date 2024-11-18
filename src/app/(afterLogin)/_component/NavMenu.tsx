'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { BsPerson, BsPersonFill } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { GoHome, GoHomeFill } from 'react-icons/go';
import { MdMail, MdMailOutline } from 'react-icons/md';

export default function NavMenu() {
  const segment = useSelectedLayoutSegment();
  const me = {
    id: 'mingr8',
  };

  return (
    <>
      <li>
        <Link href="/home" className="py-1 flex items-center h-[58px] group">
          <div className="rounded-full text-3xl flex items-center justify-center group-hover:bg-opacity-80 group-hover:bg-zinc-800 p-3">
            {segment === 'home' ? <GoHomeFill /> : <GoHome />}
            <div
              className={`text-xl ${
                segment === 'home' ? 'font-bold' : 'font-normal'
              } ml-5 mr-4`}
            >
              Home
            </div>
          </div>
        </Link>
      </li>
      <li>
        <Link href="/explore" className="py-1 flex items-center h-[58px] group">
          <div className="rounded-full text-3xl flex items-center justify-center group-hover:bg-opacity-80 group-hover:bg-zinc-800 p-3">
            {segment && ['search', 'explore'].includes(segment) ? (
              <FiSearch className="stroke-2" />
            ) : (
              <FiSearch className="stroke-1" />
            )}
            <div
              className={`text-xl ${
                segment && ['search', 'explore'].includes(segment)
                  ? 'font-bold'
                  : 'font-normal'
              } ml-5 mr-4`}
            >
              Explore
            </div>
          </div>
        </Link>
      </li>
      <li>
        <Link
          href="/messages"
          className="py-1 flex items-center h-[58px] group"
        >
          <div className="rounded-full text-3xl flex items-center justify-center group-hover:bg-opacity-80 group-hover:bg-zinc-800 p-3">
            {segment === 'messages' ? <MdMail /> : <MdMailOutline />}
            <div
              className={`text-xl ${
                segment === 'messages' ? 'font-bold' : 'font-normal'
              } ml-5 mr-4`}
            >
              Messages
            </div>
          </div>
        </Link>
      </li>
      <li>
        <Link
          href={`/${me?.id}`}
          className="py-1 flex items-center h-[58px] group"
        >
          <div className="rounded-full text-3xl flex items-center justify-center group-hover:bg-opacity-80 group-hover:bg-zinc-800 p-3">
            {segment === me?.id ? <BsPersonFill /> : <BsPerson />}
            <div
              className={`text-xl ${
                segment === me?.id ? 'font-bold' : 'font-normal'
              } ml-5 mr-4`}
            >
              Profile
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}
