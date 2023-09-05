'use client';
import * as React from 'react';
import { redirect } from 'next/navigation';
import { AuthContext } from '@/core/types/authentication';
import { AuthMachineContext } from '@/core/presentation/auth/authMachine';

export default function Home() {
  const [state, send, service] = React.useContext<AuthContext>(AuthMachineContext);
  console.log('state: ', state);
  if(state.matches('loggedOut')) {
    redirect('/signin');
  } else if (state.matches('loggedIn')) {
    redirect('/dashboard');
  }
  return (
    <main className="flex justify-center items-center w-full h-screen">
        {`${state.toStrings()}`}
    </main>
  );
}