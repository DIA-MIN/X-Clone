import Link from 'next/link';

export default function Trend() {
  return (
    <Link href="/search?q=디스패치" className="flex-col">
      <div className="text-[13px] text-neutral-500 font-normal leading-5">
        Trending in South korea
      </div>
      <div className="text-[15px] font-bold leading-5">#버니즈랑_플리랑</div>
      <div className="text-[13px] text-neutral-500 font-normal leading-5">
        4,433 posts
      </div>
    </Link>
  );
}
