import { MainNav } from '@/components/main-nav'
import UserButton from '@/components/user-button'

import './globals.css'

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en'>
      <body>
        <div className='m-3 flex flex-row gap-5'>
          <MainNav />
          <UserButton />
        </div>
        {children}
      </body>
    </html>
  )
}
