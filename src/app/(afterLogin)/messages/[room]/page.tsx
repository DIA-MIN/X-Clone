import { faker } from '@faker-js/faker';
import Link from 'next/link';
import BackButton from '../../_component/BackButton';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko'; // 한국어 가져오기

dayjs.extend(relativeTime);
dayjs.locale('ko');

export default function ChatRoom() {
  const user = {
    id: 'hero',
    nickname: '임영웅',
    image: faker.image.avatar(),
  };
  const messages = [
    {
      msgId: 1,
      roomId: 123,
      id: 'mingr95',
      content: '안녕하세요 임영웅입니다.',
      createdAt: new Date(),
    },
    {
      msgId: 2,
      roomId: 123,
      id: 'kospi',
      content: '안녕하세요!.',
      createdAt: new Date(),
    },
  ];

  return (
    <main className="">
      <div className="flex w-full h-[53px] items-center">
        <BackButton />
        <h2 className="font-extrabold text-xl">{user.nickname}</h2>
      </div>
      <div className="w-full flex items-center justify-center border-b border-solid border-b-zinc-700 mb-5">
        <Link
          href={`${user.nickname}`}
          className="w-full px-5 py-4 pb-[60px] flex-col hover:bg-white hover:bg-opacity-5"
        >
          <div className="flex justify-center">
            <img
              src={user.image}
              alt={user.id}
              className="w-16 h-16 rounded-full"
            />
          </div>
          <div className="text-center mt-1 font-bold">{user.nickname}</div>
          <div className="text-center">@{user.id}</div>
        </Link>
      </div>
      <div className="w-full">
        {messages.map((m) => {
          if (m.id === 'mingr95') {
            return (
              <div
                key={m.msgId}
                className="leading-[20px] pb-6 flex-col justify-items-end"
              >
                <div className="px-3 py-4 bg-blue-500 rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl text-[15px]">
                  {m.content}
                </div>
                <div className="text-sm text-zinc-500 mt-2">
                  {dayjs(m.createdAt).format('YYYY년 MM월 DD일 A HH시 mm분')}
                </div>
              </div>
            );
          }
          return (
            <div
              key={m.msgId}
              className="leading-[20px] pb-6 flex-col justify-items-start"
            >
              <div className="px-3 py-4 text-black bg-slate-300 rounded-tl-3xl rounded-br-3xl rounded-tr-3xl text-[15px]">
                {m.content}
              </div>
              <div className="text-sm text-zinc-500 mt-2">
                {dayjs(m.createdAt).format('YYYY년 MM월 DD일 A HH시 mm분')}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
