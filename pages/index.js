import Head from 'next/head'
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import Celeb from '../components/Celeb'
import Product from '../components/Product'
import Story from '../components/Story'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="main-container">
      <Head>
        <title>Starbucks Landing Page</title>
        <meta name="description" content="Starbucks landing page ideas by hrluqman" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Featured />
      <Celeb />
      <Product />
      <Story />
      <Footer />
      <p className='copyrighted'>©2022 Fake Starbucks Corporation. All rights reserved.</p>
    </div>
  )
}