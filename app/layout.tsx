import '../styles/globals.css'
import Header from './Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='bg-zinc-900'>
      <head></head>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
