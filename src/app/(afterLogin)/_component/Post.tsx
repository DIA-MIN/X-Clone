import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { MdVerified } from 'react-icons/md';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko'; // 한국어 가져오기
import ActionButtons from './ActionButtons';
import PostArticle from './PostArticle';
import { faker } from '@faker-js/faker';
import PostImages from './PostImages';

dayjs.extend(relativeTime);
dayjs.locale('ko');

type Props = {
  noImg?: boolean;
};

export default function Post({ noImg }: Props) {
  const target = {
    postId: 1,
    User: {
      id: 'elonmusk',
      nickname: 'Elon Musk',
      image: '/elonmusk.jpg',
    },
    content: 'Cancel culture has been canceled.',
    createdAt: new Date(),
    Images: [] as any[],
  };

  if (Math.random() > 0.5 && !noImg) {
    target.Images.push(
      { imageId: 1, link: faker.image.urlLoremFlickr() },
      { imageId: 2, link: faker.image.urlLoremFlickr() },
      { imageId: 3, link: faker.image.urlLoremFlickr() },
      { imageId: 4, link: faker.image.urlLoremFlickr() },
    );
  }

  return (
    <PostArticle post={target}>
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
          <div className="mt-3">
            <PostImages post={target} />
          </div>
          <ActionButtons white />
        </div>
      </div>
    </PostArticle>
  );
}
