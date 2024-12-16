import { FiSearch } from 'react-icons/fi';

type Props = {
  q?: string;
};

export default function SearchForm({ q }: Props) {
  return (
    <form className="w-full bg-zinc-800 rounded-full flex items-center mt-[6px] focus-within:ring-2 ring-blue-500 group">
      <FiSearch className="text-xl text-zinc-400 ml-5 group-focus-within:text-blue-500" />
      <input className="p-3 ml-[5px] text-[15px] border-none outline-none bg-inherit w-4/5" />
    </form>
  );
}
