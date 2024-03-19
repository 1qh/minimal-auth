'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Page() {
  const [data, setData] = useState()
  useEffect(() => {
    ;(async () => {
      const res = await fetch('/api/protected')
      const json = await res.json()
      setData(json)
    })()
  }, [])
  return (
    <div className='flex flex-col gap-6'>
      <h1 className='text-3xl font-bold'>Route Handler Usage</h1>
      <p>
        This page fetches data from an API{' '}
        <Link href='https://nextjs.org/docs/app/building-your-application/routing/route-handlers'>
          Route Handler
        </Link>
        . The API is protected using the universal{' '}
        <Link href='https://nextjs.authjs.dev#auth'>
          <code>auth()</code>
        </Link>{' '}
        method.
      </p>
      <div className='flex flex-col rounded-md bg-neutral-100'>
        <div className='rounded-t-md bg-neutral-200 p-4 font-bold'>Data from API Route</div>
        <pre className='whitespace-pre-wrap break-all px-4 py-6'>
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  )
}
