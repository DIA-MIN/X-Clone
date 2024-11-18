import Trend from './Trend';

export default function TrendSection() {
  return (
    <div className="w-full rounded-2xl border border-neutral-700 border-solid mb-4">
      <div className="py-3 px-4">
        <span className="text-xl font-extrabold">Trends for you</span>
      </div>
      <div className="py-3 px-4 hover:bg-neutral-700 hover:bg-opacity-15">
        <Trend />
      </div>
      <div className="py-3 px-4 hover:bg-neutral-700 hover:bg-opacity-15">
        <Trend />
      </div>
      <div className="py-3 px-4 hover:bg-neutral-700 hover:bg-opacity-15">
        <Trend />
      </div>
      <div className="py-3 px-4 hover:bg-neutral-700 hover:bg-opacity-15">
        <Trend />
      </div>
      <div className="py-3 px-4 hover:bg-neutral-700 hover:bg-opacity-15">
        <Trend />
      </div>
      <div className="py-3 px-4 hover:bg-neutral-700 hover:bg-opacity-15">
        <Trend />
      </div>
      <div className="py-3 px-4 hover:bg-neutral-700 hover:bg-opacity-15">
        <Trend />
      </div>
      <div className="py-3 px-4 hover:bg-neutral-700 hover:bg-opacity-15">
        <Trend />
      </div>
      <div className="py-3 px-4 hover:bg-neutral-700 hover:bg-opacity-15">
        <Trend />
      </div>
      <button className="w-full text-left text-blue-500 text-[15px] font-normal py-3 px-4 hover:bg-neutral-700 hover:bg-opacity-15 rounded-b-2xl">
        Show more
      </button>
    </div>
  );
}
