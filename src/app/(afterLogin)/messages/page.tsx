import Room from './_component/Room';

export default function Page() {
  return (
    <main>
      <div className="flex items-center max-w-[600px] w-full h-[53px] px-4">
        <h2 className="font-extrabold text-xl">Messages</h2>
      </div>
      <div>
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
      </div>
    </main>
  );
}
