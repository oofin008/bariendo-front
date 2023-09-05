'use client';
import React from 'react';
import { useMachine } from '@xstate/react';
import { authenticationMachine, AuthMachineContext } from '@/core/presentation/auth/authMachine';

export default function ({ children }: { children: React.ReactNode }) {
  const [state, send, service] = useMachine(authenticationMachine);
  const authMachine = [state, send, service];
  return (
    <AuthMachineContext.Provider value={authMachine}>
        {children}
    </AuthMachineContext.Provider>
  )
}
