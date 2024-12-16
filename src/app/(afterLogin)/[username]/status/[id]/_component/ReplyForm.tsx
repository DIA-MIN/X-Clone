'use client';

import Image from 'next/image';
import { ChangeEventHandler, FormEventHandler, useRef, useState } from 'react';
import { RiImage2Fill } from 'react-icons/ri';

export default function ReplyForm() {
  const [content, setContent] = useState('');
  const imageRef = useRef<HTMLInputElement>(null);

  const user = {
    id: 'Bill Gates',
    nickName: 'BillGates',
    image: '/bill.jpg',
  };

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  };

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };

  const onClickButton = () => {
    imageRef.current?.click();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex px-4 border-b border-b-zinc-700 border-x border-x-zinc-700"
    >
      <div className="mr-2 basis-10 grow-0 pt-6">
        <div className="h-10 w-full overflow-x-visible overflow-y-visible block">
          <div className="rounded-full overflow-hidden">
            <Image src={user.image} alt={user.id} width={40} height={40} />
          </div>
        </div>
      </div>
      <div className="flex-col basis-0 pt-4 justify-center grow static items-center ">
        <div className="p-3">
          <textarea
            value={content}
            onChange={onChange}
            className="bg-transparent w-full resize-none placeholder:text-lg focus:outline-none py-[2px]"
            placeholder="Post your reply"
            rows={1}
          ></textarea>
        </div>
        <div className="p-2 flex w-full justify-between">
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
            Reply
          </button>
        </div>
      </div>
    </form>
  );
}
