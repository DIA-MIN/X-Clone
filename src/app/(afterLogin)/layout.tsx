import Link from 'next/link';
import { BsTwitterX } from 'react-icons/bs';
import NavMenu from './_component/NavMenu';
import LogoutButton from './_component/LogoutButton';
import TrendSection from './_component/TrendSection';
import FollowRecommend from './_component/FollowRecommend';
import RightSearch from './_component/RightSearch';

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function AfterLoginLayout({ children, modal }: Props) {
  return (
    <div className="flex items-stretch">
      <header className="flex items-end flex-col flex-grow">
        <section className="w-[275px] h-dvh">
          <div className="flex flex-col w-[275px] fixed h-dvh">
            <div className="py-1 flex items-center h-[58px]">
              <Link
                href="/home"
                className="w-[50px] h-[50px] rounded-full text-3xl flex items-center justify-center hover:bg-opacity-80 hover:bg-zinc-800"
              >
                <BsTwitterX />
              </Link>
            </div>
            <nav className="flex-grow">
              <ul>
                <NavMenu />
              </ul>
              <Link
                href="/compose/post"
                className="flex items-center justify-center rounded-full w-[233px] px-8 my-4 h-[52px] bg-blue-500 font-bold hover:bg-opacity-85"
              >
                Post
              </Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      <div className="flex items-start h-dvh flex-grow">
        <div className="flex h-full w-[990px] justify-between">
          <main className="w-[600px] h-full">{children}</main>
          <section className="w-[350px] h-full">
            <RightSearch />
            <TrendSection />
            <div className="w-full rounded-2xl border border-neutral-700 border-solid my-3">
              <div className="py-3 px-4">
                <span className="text-xl font-extrabold">Who to follow</span>
              </div>
              <div className="py-3 px-4 hover:bg-neutral-700 hover:bg-opacity-15 w-full">
                <FollowRecommend />
              </div>
              <div className="py-3 px-4 hover:bg-neutral-700 hover:bg-opacity-15 w-full">
                <FollowRecommend />
              </div>
              <div className="py-3 px-4 hover:bg-neutral-700 hover:bg-opacity-15 w-full">
                <FollowRecommend />
              </div>
              <button className="w-full text-left text-blue-500 text-[15px] font-normal py-3 px-4 hover:bg-neutral-700 hover:bg-opacity-15 rounded-b-2xl">
                Show more
              </button>
            </div>
          </section>
        </div>
      </div>
      {modal}
    </div>
  );
}
