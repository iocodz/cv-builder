"use client"

import './globals.css'
import { StoreProvider } from 'easy-peasy'
import { store } from '../lib/store'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><StoreProvider store={store}>{children}</StoreProvider></body>
    </html>
  )
}
