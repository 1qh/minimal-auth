'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

import { Button } from './ui/button'
import { Input } from './ui/input'
import SessionData from './session-data'

const UpdateForm = () => {
  const { data: session, update } = useSession()
  const [name, setName] = useState(`New ${session?.user?.name}` ?? '')

  if (!session?.user) {
    return null
  }
  return (
    <>
      <h2 className='text-xl font-bold'>Updating the session</h2>
      <form
        onSubmit={async () => {
          if (session) {
            const newSession = await update({
              ...session,
              user: { ...session.user, name }
            })
            console.log({ newSession })
          }
        }}
        className='flex w-full max-w-sm items-center space-x-2'>
        <Input
          type='text'
          placeholder='New name'
          value={name}
          onChange={e => {
            setName(e.target.value)
          }}
        />
        <Button type='submit'>Update</Button>
      </form>
    </>
  )
}

export default function ClientExample() {
  const { data: session, status } = useSession()
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-3xl font-bold'>Client Side Rendering</h1>
      <p>
        This page fetches session data client side using the{' '}
        <Link href='https://nextjs.authjs.dev/react#usesession'>
          <code>useSession</code>
        </Link>{' '}
        React Hook.
      </p>
      <p>
        It needs the{' '}
        <Link href='https://react.devreference/nextjs/react/use-client'>
          <code>&apos;use client&apos;</code>
        </Link>{' '}
        directive at the top of the file to enable client side rendering, and the{' '}
        <Link href='https://nextjs.authjs.dev/react#sessionprovider'>
          <code>SessionProvider</code>
        </Link>{' '}
        component in{' '}
        <strong>
          <code>client-example/page.tsx</code>
        </strong>{' '}
        to provide the session data.
      </p>
      {status === 'loading' ? <div>Loading...</div> : <SessionData session={session} />}
      <UpdateForm />
    </div>
  )
}
