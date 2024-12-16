'use client';

import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko'; // 한국어 가져오기
import Link from 'next/link';
import { MdVerified } from 'react-icons/md';
import { useRouter } from 'next/navigation';

dayjs.extend(relativeTime);
dayjs.locale('ko');

export default function Room() {
  const user = {
    id: 'hero',
    nickname: '임영웅',
    Messages: [
      {
        roomId: 123,
        content: '안녕하세요 임영웅입니다.',
        createdAt: new Date(),
      },
      { roomId: 123, content: '안녕하세요!.', createdAt: new Date() },
    ],
  };

  const router = useRouter();

  const onClick = () => {
    router.push(`/messages/${user.Messages.at(-1)?.roomId}`);
  };

  return (
    <div className="flex-row p-4 hover:bg-white hover:bg-opacity-5 cursor-pointer">
      <div className="flex">
        <img
          className="w-10 h-10 rounded-full"
          src={faker.image.avatar()}
          alt=""
        />
        <div
          onClickCapture={onClick}
          className="flex-col pb-3 basis-0 grow justify-start ml-3"
        >
          <Link href={`/${user.id}`} className="mb-[2px] flex items-center">
            <div className="font-bold text-[15px] leading-5 hover:underline">
              {user.nickname}
            </div>
            <MdVerified className="text-blue-500 text-lg ml-[2px]" />
            <div className="ml-1 text-zinc-500 text-[15px]">
              {`@${user.id} · ${dayjs(user.Messages?.at(-1)?.createdAt).fromNow(
                true,
              )}`}
            </div>
          </Link>
          <div className="leading-5 text-[15px] font-normal">
            {user.Messages?.at(-1)?.content}
          </div>
        </div>
      </div>
    </div>
  );
}
