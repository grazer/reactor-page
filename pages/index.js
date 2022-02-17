import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Reactor 7" />
        <p className="description">
        <iframe width="320" height="527" src="https://flowlab.io/game/embed/1768585" frameborder="0" allowfullscreen></iframe>
        made with <a href="https://flowlab.io">Flowlab game making software</a> 
        </p>
      </main>

      <Footer />
    </div>
  )
}
