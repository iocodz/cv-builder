import './globals.css'
import { Metadata } from 'next';
import Providers from '../_components/Providers';

export const metadata: Metadata = {
  title: 'Build Your Professional CV Online | FREE, Easy and Customizable Templates',
  description: 'Create a standout CV effortlessly with our intuitive online builder. Choose from stylish templates, personalize details like contact info, skills, and work experiences. Your professional journey starts here.',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
