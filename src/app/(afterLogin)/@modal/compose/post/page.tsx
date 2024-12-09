'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEventHandler, FormEventHandler, useRef, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { RiImage2Fill } from 'react-icons/ri';

export default function PostModal() {
  const [content, setContent] = useState('');
  const imageRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const user = {
    id: 'Bill Gates',
    nickName: 'BillGates',
    image: '/bill.jpg',
  };

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };
  const onClickClose = () => {
    router.back();
  };
  const onClickButton = () => {
    imageRef.current?.click();
  };
  const onChangeContent: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="fixed inset-x-0 top-[5%] flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-white opacity-15"></div>
      <div className="relative min-w-[600px] max-w-[80vw] mx-auto bg-black rounded-lg shadow-lg z-50">
        <div className="flex items-center w-full px-4 h-[53px]">
          <div
            onClick={onClickClose}
            className="flex justify-center items-center w-7 h-7 hover:bg-zinc-700 hover:bg-opacity-50 rounded-full cursor-pointer"
          >
            <MdClose className="text-xl" />
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex-col px-4 border-b border-b-zinc-700"
        >
          <div className="flex w-full">
            <div className="mr-2 basis-10 grow-0 pt-1">
              <div className="h-10 w-full overflow-x-visible overflow-y-visible block">
                <div className="rounded-full overflow-hidden">
                  <Image
                    src={user.image}
                    alt={user.id}
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>
            <div className="flex-col basis-0 justify-center grow static items-center ">
              <div className="p-3">
                <textarea
                  value={content}
                  onChange={onChangeContent}
                  className="bg-transparent w-full resize-none placeholder:text-lg focus:outline-none px-[2px]"
                  placeholder="What is happening?!"
                  rows={3}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="p-2 flex border-t border-t-zinc-700 w-full justify-between">
            <div className="flex items-center text-blue-500">
              <input
                type="file"
                name="imageFiles"
                multiple
                hidden
                ref={imageRef}
              />
              <div
                onClick={onClickButton}
                className="w-[34px] h-[34px] m-auto rounded-full flex justify-center items-center cursor-pointer hover:bg-zinc-800"
              >
                <RiImage2Fill className="w-5 h-5" />
              </div>
            </div>
            <button className="min-h-8 px-4 ml-3 rounded-full bg-blue-500 box-border font-bold hover:bg-opacity-80">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
