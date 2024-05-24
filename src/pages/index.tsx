import { Layout } from '@/layout/layout'
import { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'

const HomePage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Home page</h1>
    </div>
  )
}

HomePage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default HomePage
