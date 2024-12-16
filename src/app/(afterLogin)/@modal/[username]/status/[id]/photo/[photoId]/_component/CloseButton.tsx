'use client';

import { useRouter } from 'next/navigation';
import { IoClose } from 'react-icons/io5';

export default function CloseButton() {
  const router = useRouter();

  const onClickButton = () => {
    router.back();
  };

  return (
    <div
      onClick={onClickButton}
      className="flex justify-center items-center w-[34px] h-[34px] rounded-full hover:bg-opacity-30 hover:bg-zinc-700 cursor-pointer"
    >
      <IoClose className="text-[24px]" />
    </div>
  );
}
