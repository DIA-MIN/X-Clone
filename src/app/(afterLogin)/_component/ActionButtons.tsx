'use client';

import { useState } from 'react';
import { FaRegHeart, FaRetweet } from 'react-icons/fa';
import { TbMessageCircle } from 'react-icons/tb';

export default function ActionButtons() {
  const [commented, setCommented] = useState(false);
  const [rePosted, setRePosted] = useState(false);
  const [liked, setLiked] = useState(false);

  const onClickComment = () => {
    setCommented((commented) => !commented);
  };
  const onClickRePost = () => {
    setRePosted((posted) => !posted);
  };
  const onClickLike = () => {
    setLiked((liked) => !liked);
  };

  return (
    <div className="flex mt-3 w-full max-w-[600px]">
      <div className="flex items-center w-full justify-between">
        <div
          onClick={onClickComment}
          className={`group flex items-center justify-center hover:text-sky-500 ${
            commented ? 'text-sky-500' : 'text-zinc-500'
          }`}
        >
          <div className="flex items-center justify-center rounded-full w-8 h-8 group-hover:bg-opacity-15 group-hover:bg-sky-500">
            <TbMessageCircle className="text-xl" />
          </div>
          <span className="ml-[2px] text-[13px]">1</span>
        </div>
        <div
          onClick={onClickRePost}
          className={`group flex items-center justify-center hover:text-green-400 ${
            rePosted ? 'text-green-400' : 'text-zinc-500'
          }`}
        >
          <div className="flex items-center justify-center rounded-full w-8 h-8 group-hover:bg-green-400 group-hover:bg-opacity-15 ">
            <FaRetweet className="text-xl" />
          </div>
          <span className="ml-[2px] text-[13px]">1</span>
        </div>
        <div
          onClick={onClickLike}
          className={`group flex items-center justify-center hover:text-pink-600 ${
            liked ? 'text-pink-600' : 'text-zinc-500'
          }`}
        >
          <div className="flex items-center justify-center rounded-full w-8 h-8 group-hover:bg-pink-600 group-hover:bg-opacity-15 ">
            <FaRegHeart className="text-xl" />
          </div>
          <span className="ml-[2px] text-[13px]">1</span>
        </div>
      </div>
    </div>
  );
}
