import BackButton from '../_component/BackButton';
import SearchForm from '../_component/SearchForm';
import Tab from './_component/Tab';

type Props = {
  searchParams: Promise<{ q: string; f?: string; pf?: string }>;
};

export default async function Search({ searchParams }: Props) {
  const { q, f, pf } = await searchParams;

  return (
    <main>
      <div className="flex items-center px-4 mb-1">
        <div className="pt-2">
          <BackButton />
        </div>
        <SearchForm q={q} />
      </div>
      <Tab />
      <div className="w-full mt-1">
        <div className="py-3 px-4">
          <span className="text-xl font-extrabold">People</span>
        </div>
        <button className="w-full text-left text-blue-500 text-[15px] font-normal py-3 px-4 hover:bg-neutral-700 hover:bg-opacity-15">
          View all
        </button>
      </div>
    </main>
  );
}
