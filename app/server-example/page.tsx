import { auth } from 'auth'
import Link from 'next/link'

import SessionData from '@/components/session-data'

export default async function Page() {
  const session = await auth()
  return (
    <div className='space-y-2'>
      <h1 className='text-3xl font-bold'>React Server Component Usage</h1>
      <p>
        This page is server-rendered as a{' '}
        <Link href='https://nextjs.org/docs/app/building-your-application/rendering/server-components'>
          React Server Component
        </Link>
        . It gets the session data on the server using{' '}
        <Link href='https://nextjs.authjs.dev#auth'>
          <code>auth()</code>
        </Link>{' '}
        method.
      </p>
      <SessionData session={session} />
    </div>
  )
}
