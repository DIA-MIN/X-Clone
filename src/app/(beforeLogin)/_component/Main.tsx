import Link from 'next/link';

export default function Main() {
  return (
    <div className='flex align-middle w-full h-full'>
      <div className='flex items-center justify-center w-1/2 h-full'>
        <div className='text-26rem'>𝕏</div>
        {/* <Image src={Logo} alt='logo' /> Next에서 img 태그를 사용할 때 이와 같이 사용 -> 최적화 시켜줌 */}
      </div>
      <div className='flex items-left justify-center flex-col w-1/2 h-full'>
        <div className='text-7xl font-bold mb-12'>지금 일어나고 있는 일</div>
        <div className='text-3xl font-bold mb-8'>지금 가입하세요.</div>
        <Link href='/i/flow/signup' className='rounded-full p-3 text-center bg-blue-500 max-w-80 font-bold hover:bg-opacity-85 mb-8'>계정 만들기</Link>
        <div className='text-xl font-extrabold mb-4'>이미 트위터에 가입하셨나요?</div>
        <Link href='/login' className='rounded-full p-3 text-center border-solid border-blue-500 border-2 max-w-80 text-blue-500 font-bold hover:bg-opacity-15 hover:bg-blue-400'>로그인</Link>
      </div>
    </div>
  );
}