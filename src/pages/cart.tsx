import { Layout } from '@/layout/layout'
import { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'

const CartPage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Cart page</h1>
    </div>
  )
}

CartPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export const getStaticProps = async () => {
  await new Promise((res) => {
    setTimeout(() => {
      res(123)
    }, 1000)
  })
  return {
    props: {},
  }
}

export default CartPage
