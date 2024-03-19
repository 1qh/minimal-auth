import Link from 'next/link'

export default function Page() {
  return (
    <div className='space-y-2'>
      <h1 className='text-3xl font-bold'>Middleware usage</h1>
      <p>
        This page is protected by using the universal{' '}
        <Link href='https://nextjs.authjs.dev#auth'>
          <code>auth()</code>
        </Link>{' '}
        method in{' '}
        <Link href='https://nextjs.org/docs/app/building-your-application/routing/middleware'>
          Next.js Middleware
        </Link>
      </p>
    </div>
  )
}
