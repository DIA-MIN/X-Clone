import BackButton from '@/app/(afterLogin)/_component/BackButton';
import Post from '@/app/(afterLogin)/_component/Post';
import ReplyForm from './_component/ReplyForm';

export default function Page() {
  return (
    <div className="flex-col">
      <div className="flex px-4 items-center h-[53px] sticky top-0 bg-opacity-50 z-10 border-b border-b-neutral-700 backdrop-blur-md">
        <BackButton />
        <h3 className="font-extrabold text-xl">Post</h3>
      </div>
      <Post />
      <ReplyForm />
    </div>
  );
}
