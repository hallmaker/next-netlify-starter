import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>AquaBoost</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/AquaBoost Light Logo.png" alt="AquaBoost Logo" className="logo" />
        <Header title="Coming Soon!" />
      </main>

      <Footer />
    </div>
  )
}
