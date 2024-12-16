'use client';

import { useRouter } from 'next/navigation';
import { IoArrowBack } from 'react-icons/io5';

export default function BackButton() {
  const router = useRouter();

  const onClickButton = () => {
    router.back();
  };

  return (
    <div
      onClick={onClickButton}
      className="flex justify-center items-center w-[34px] h-[34px] rounded-full hover:bg-opacity-30 hover:bg-zinc-700 mr-6 cursor-pointer"
    >
      <IoArrowBack className="text-[24px]" />
    </div>
  );
}
