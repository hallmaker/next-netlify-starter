import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>AquaBoost</title>
      </Head>

      <main>
        <Header title="Coming Soon!" />
      </main>

      <Footer />
    </div>
  )
}
