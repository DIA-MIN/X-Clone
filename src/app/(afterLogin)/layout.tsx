import Link from 'next/link';
import { BsTwitterX } from 'react-icons/bs';
import NavMenu from './_component/NavMenu';
import LogoutButton from './_component/LogoutButton';
import TrendSection from './_component/TrendSection';
import FollowRecommend from './_component/FollowRecommend';
import RightSearch from './_component/RightSearch';
import { RiQuillPenLine } from 'react-icons/ri';

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function AfterLoginLayout({ children, modal }: Props) {
  return (
    <div className="flex items-stretch">
      <header className="flex items-end flex-col flex-grow">
        <section className="w-[72px] h-dvh xl:w-[275px] xl:p-2">
          <div className="flex flex-col items-center w-[72px] fixed h-dvh xl:w-[275px] xl:items-start">
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
                className="flex items-center justify-center rounded-full w-[50px] h-[50px] px-0 my-4 bg-blue-500 font-bold hover:bg-opacity-85 xl:w-[233px] xl:h-[52px] xl:px-8"
              >
                {/* 1280px 초과에서만 보이는 Post */}
                <span className="hidden xl:inline">Post</span>

                {/* 1280px 이하에서만 보이는 아이콘 */}
                <RiQuillPenLine className="xl:hidden" />
              </Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      <div className="flex items-start h-dvh flex-grow">
        <div className="flex h-full w-[600px] justify-between xl:w-[990px]">
          <main className="w-[600px] h-full">{children}</main>
          <section className="hidden w-[350px] h-full lg:block">
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
