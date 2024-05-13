import Navbar from './navbar'
// import Footer from './footer'

const metadata = {
  title: "제니구의 영어전담마크",
};
 
export default function Layout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}