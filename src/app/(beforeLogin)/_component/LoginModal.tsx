'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

export default function LoginModal() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  // const [message, setMessage] = useState('')

  const router = useRouter();
  const onClickClose = () => {
    router.back();
  }

  const onChangeId = (e:React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const onChangePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {};

  return (
  <div className='fixed inset-0 flex items-center justify-center z-50'>
    <div className='fixed inset-0 bg-black opacity-50'></div>
    <div className='relative w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg z-50 px-20 py-16 text-black'>
      <button onClick={onClickClose} className='absolute top-3 left-3 rounded-full hover:bg-neutral-300 hover:bg-opacity-85 w-8 h-8 text-3xl flex items-center justify-center'>
        <IoClose/>
      </button>
      <h2 className='text-3xl font-extrabold mb-4'>로그인하세요.</h2>
      <form onSubmit={onSubmit}>
        <div className='border-solid border-2 rounded-lg p-3 flex flex-col border-black mb-4'>
          <label className='text-blue-500 text-sm'>아이디</label>
          <input className='border-none outline-none mt-1 text-lg' value={id} onChange={onChangeId} type='text' placeholder='아이디를 입력해주세요.'></input>
        </div>
        <div className='border-solid border-2 rounded-lg p-3 flex flex-col border-black mb-4'>
          <label className='text-blue-500 text-sm'>비밀번호</label>
          <input className='border-none outline-none mt-1 text-lg' value={password} onChange={onChangePassword} type='password' placeholder='비밀번호를 입력해주세요.'></input>
        </div>
        {/* <div className='h-8'>{message}</div> */}
        <button onClick={() => {}} className='rounded-full p-3 text-center bg-blue-500 w-full font-bold hover:bg-opacity-85 text-white'>로그인하기</button>
      </form>
    </div>
  </div>
  );
}