import Post from '@/app/(afterLogin)/_component/Post';
import CloseButton from './_component/CloseButton';
import ReplyForm from '@/app/(afterLogin)/[username]/status/[id]/_component/ReplyForm';
import ActionButtons from '@/app/(afterLogin)/_component/ActionButtons';
import { faker } from '@faker-js/faker';

export default function PhotoModal() {
  const photo = {
    imageId: 1,
    link: faker.image.urlLoremFlickr(),
    Post: {
      content: faker.lorem.text(),
    },
  };

  return (
    <div className="w-screen fixed top-0 h-full items-center flex justify-center z-[99]">
      <div className="flex justify-center bg-black bg-opacity-85 relative overflow-x-hidden overflow-y-hidden h-full w-full flex-grow">
        <div className="absolute top-0 left-0 flex justify-center items-center w-[60px] h-[60px]">
          <CloseButton />
        </div>
        <div className="flex flex-col w-full h-full items-center justify-center">
          <div className="flex items-center justify-center h-[calc(100%-50px)] max-w-[895px] w-full">
            <img
              className="object-contain max-h-full max-w-full"
              src={photo.link}
              alt={PhotoModal.Post?.content}
            />
          </div>
          <div className="flex justify-center items-center w-full h-[50px] pb-3">
            <ActionButtons />
          </div>
        </div>
      </div>
      <div className="flex-col max-w-[350px] w-full h-full overflow-auto bg-black">
        <Post noImg />
        <ReplyForm />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
