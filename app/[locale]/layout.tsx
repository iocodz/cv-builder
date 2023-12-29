import './globals.css'
import { Metadata } from 'next';
import Providers from '../_components/Providers';

export const metadata: Metadata = {
  title: 'Create your free resume',
  description: 'Create your free resume online NOW!',
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode,
  params: { locale: string }
}) {
  return (
    <html lang={locale}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
