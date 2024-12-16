'use client';

import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
};

export default function PostArticle({ children, post }: Props) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };

  return (
    <article
      onClickCapture={onClick}
      className="px-4 pt-3 overflow-x-hidden overflow-y-hidden border-x border-b border-x-zinc-700 border-b-zinc-700  hover:bg-white hover:bg-opacity-5 cursor-pointer"
    >
      {children}
    </article>
  );
}
