import Link from 'next/link';

type Props = {
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

export default function PostImages({ post }: Props) {
  if (!post.Images) return null;
  if (!post.Images.length) return null;
  if (post.Images.length === 1) {
    return (
      <Link
        className="max-h-[510px] bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${post.Images[0]?.link})` }}
        href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
      >
        <img
          src={post.Images[0]?.link}
          alt=""
          className="rounded-2xl h-full max-h-[510px]"
        />
      </Link>
    );
  }
  if (post.Images.length === 2) {
    return (
      <div className="flex w-full h-[272px] rounded-xl overflow-hidden border-solid border border-zinc-500 gap-[2px]">
        {/* 첫 번째 이미지 */}
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          className="w-1/2 h-full bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${post.Images[0]?.link})` }}
        >
          <img
            src={post.Images[0]?.link}
            alt=""
            className="w-full h-full object-cover"
          />
        </Link>
        {/* 두 번째 이미지 */}
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
          className="w-1/2 h-full bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${post.Images[1]?.link})` }}
        >
          <img
            src={post.Images[1]?.link}
            alt=""
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
    );
  }
  if (post.Images.length === 3) {
    return (
      <div className="flex w-full h-[272px] rounded-xl overflow-hidden border-solid border border-zinc-500 gap-[2px]">
        {/* 첫 번째 이미지 */}
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          className="w-1/2 h-full bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${post.Images[0]?.link})` }}
        >
          <img
            src={post.Images[0]?.link}
            alt=""
            className="w-full h-full object-cover"
          />
        </Link>
        {/* 두 번째와 세 번째 이미지가 들어가는 열 */}
        <div className="flex flex-col w-1/2 h-full gap-[2px]">
          {/* 두 번째 이미지 */}
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
            className="w-full h-1/2 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${post.Images[1]?.link})` }}
          >
            <img
              src={post.Images[1]?.link}
              alt=""
              className="w-full h-full object-cover"
            />
          </Link>
          {/* 세 번째 이미지 */}
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`}
            className="w-full h-1/2 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${post.Images[2]?.link})` }}
          >
            <img
              src={post.Images[2]?.link}
              alt=""
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
      </div>
    );
  }
  if (post.Images.length === 4) {
    return (
      <div className="flex w-full h-[272px] rounded-xl overflow-hidden border-solid border border-zinc-500 gap-[2px]">
        {/* 첫 번째와 두 번째 이미지가 들어가는 열 */}
        <div className="flex flex-col w-1/2 h-full gap-[2px]">
          {/* 첫 번째 이미지 */}
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
            className="w-full h-1/2 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${post.Images[0]?.link})` }}
          >
            <img
              src={post.Images[0]?.link}
              alt=""
              className="w-full h-full object-cover"
            />
          </Link>
          {/* 두 번째 이미지 */}
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
            className="w-full h-1/2 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${post.Images[1]?.link})` }}
          >
            <img
              src={post.Images[1]?.link}
              alt=""
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
        {/* 두 번째와 세 번째 이미지가 들어가는 열 */}
        <div className="flex flex-col w-1/2 h-full gap-[2px]">
          {/* 두 번째 이미지 */}
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`}
            className="w-full h-1/2 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${post.Images[2]?.link})` }}
          >
            <img
              src={post.Images[2]?.link}
              alt=""
              className="w-full h-full object-cover"
            />
          </Link>
          {/* 세 번째 이미지 */}
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[3].imageId}`}
            className="w-full h-1/2 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${post.Images[3]?.link})` }}
          >
            <img
              src={post.Images[3]?.link}
              alt=""
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
      </div>
    );
  }

  return null;
}
