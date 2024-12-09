import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { MdVerified } from 'react-icons/md';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko'; // 한국어 가져오기
import ActionButtons from './ActionButtons';

dayjs.extend(relativeTime);
dayjs.locale('ko');

export default function Post() {
  const target = {
    User: {
      id: 'elonmusk',
      nickname: 'Elon Musk',
      image: '/elonmusk.jpg',
    },
    content: 'Cancel culture has been canceled.',
    createdAt: new Date(),
    Images: [],
  };

  return (
    <article className="px-4 pt-3 overflow-x-hidden overflow-y-hidden border-b border-b-zinc-700  hover:bg-white hover:bg-opacity-5 cursor-pointer">
      <div className="flex ">
        <div className="basis-10 grow-0 items-center mr-2">
          <Link href={`/${target.User.id}`}>
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                width={40}
                height={40}
                src={target.User.image}
                alt={target.User.id}
              />
            </div>
          </Link>
        </div>
        <div className="flex-col pb-3 basis-0 grow justify-start">
          <Link
            href={`/${target.User.id}`}
            className="mb-[2px] flex items-center"
          >
            <div className="font-bold text-[15px] leading-5 hover:underline">
              {target.User.nickname}
            </div>
            <MdVerified className="text-blue-500 text-lg ml-[2px]" />
            <div className="ml-1 text-zinc-500 text-[15px]">
              {`@${target.User.id} · ${dayjs(target.createdAt).fromNow(true)}`}
            </div>
          </Link>
          <div className="leading-5 text-[15px] font-normal">
            {target.content}
          </div>
          {target.Images.length > 0 && (
            <div className="mt-3 rounded-2xl border border-solid border-zinc-700">
              {/* <Image src={} */}
            </div>
          )}
          <ActionButtons />
        </div>
      </div>
    </article>
  );
}