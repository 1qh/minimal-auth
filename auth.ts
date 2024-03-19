import type { NextAuthConfig } from 'next-auth'
import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

export const config = {
  providers: [Google],
  basePath: '/auth',
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      if (pathname === '/middleware-example') {
        return !!auth
      }
      return true
    },
    jwt({ token, trigger, session }) {
      if (trigger === 'update') {
        token.name = session.user.name
      }
      return token
    }
  },
  trustHost: true
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)
