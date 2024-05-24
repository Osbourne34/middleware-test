import { Layout } from '@/layout/layout'
import { NextPageWithLayout } from './_app'
import { ReactElement, SyntheticEvent } from 'react'
import { useRouter } from 'next/router'

const LoginPage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Login page</h1>
      <LoginForm />
    </div>
  )
}

const LoginForm = () => {
  const { push } = useRouter()

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    const date = new Date(Date.now() + 86400e3)
    const endTime = date.toUTCString()

    document.cookie = `token=${Math.random()}; path=/; expires=${endTime};`
    push('/')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border max-w-lg p-5 flex flex-col space-y-4"
    >
      <input type="text" placeholder="email" className="border p-2" required />
      <button type="submit" className="bg-blue-600 text-white font-bold p-2">
        Submit
      </button>
    </form>
  )
}

LoginPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default LoginPage
