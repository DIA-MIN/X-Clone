import SearchForm from '../_component/SearchForm';
import Trend from '../_component/Trend';

export default function Page() {
  return (
    <main>
      <div className="px-4">
        <SearchForm />
      </div>
      <div className="w-full border-t border-t-neutral-700 border-solid mt-2">
        <div className="py-3 px-4">
          <span className="text-xl font-extrabold">Trends for you</span>
        </div>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <button className="w-full text-left text-blue-500 text-[15px] font-normal py-3 px-4 hover:bg-neutral-700 hover:bg-opacity-15 rounded-b-2xl">
          Show more
        </button>
      </div>
    </main>
  );
}
