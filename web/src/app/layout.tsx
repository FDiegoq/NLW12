import './globals.css'
import { Roboto_Flex, 
         Bai_Jamjuree
} from 'next/font/google'

const roboto = Roboto_Flex({ subsets: ['latin'], variable:"--roboto" })
const baijamjuree = Bai_Jamjuree({ subsets: ['latin'], weight:"700", variable:"--baijamjuree"})

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Onde suas memórias são guardadas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baijamjuree.variable} font-sans text-gray-100 bg-gray-900`}>{children}</body>
    </html>
  )
}
