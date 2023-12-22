"use client"

import './globals.css'
import { StoreProvider } from 'easy-peasy'
import { store } from '../_lib/store'
import { useStoreRehydrated } from 'easy-peasy';

function WaitForStateRehydration({ children }: {children: any}) {
  const isRehydrated = useStoreRehydrated();
  return isRehydrated ? children : null;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider store={store}>
          <WaitForStateRehydration>
            {children}
          </WaitForStateRehydration>
        </StoreProvider>
      </body>
    </html>
  )
}
