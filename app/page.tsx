import { auth } from 'auth'
import Link from 'next/link'

export default async function Index() {
  const session = await auth()

  return (
    <div className='flex flex-col gap-6'>
      <div>
        Example of <Link href='https://nextjs.authjs.dev'>NextAuth.js</Link> for authentication.
        Check out{' '}
        <Link href='/server-example' className='underline'>
          Server
        </Link>{' '}
        and{' '}
        <Link href='/client-example' className='underline'>
          Client
        </Link>{' '}
        examples to see how to secure pages and get session data.
      </div>
      <div className='flex flex-col rounded-md bg-neutral-100'>
        <div className='rounded-t-md bg-neutral-200 p-4 font-bold'>Current Session</div>
        <pre className='whitespace-pre-wrap break-all px-4 py-6'>
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </div>
  )
}
