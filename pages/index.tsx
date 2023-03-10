import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import Features from '../components/shared/Features'
import Hero from '../components/shared/Hero'

const Home: NextPage = () => {
  const pageTitle = 'Wishing Fountain - Help to build the future support todays dream.'
  return (
    <Layout page='home'>    
      <Head>
        <title>Wishing Fountain</title>
        <meta
          name="description"
          content={pageTitle}
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            pageTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg&images=https%3A%2F%2Fgrandparentals.vercel.app%2Flogo%2Ficon.svg`}
        />
      </Head>
      <Hero></Hero>
      <Features></Features>
    </Layout> 
  )
}

export default Home
