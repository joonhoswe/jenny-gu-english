import Navbar from './navbar'
// import Footer from './footer'
import Head from "next/head"
 
export default function Layout({ children }) {
  return (
    <div className='bg-green-150'>
     <Head>
        <title>제니구의 영어전담마크</title>
        <meta name="description" content="하루 10분, 30일만에!" />
      </Head>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}