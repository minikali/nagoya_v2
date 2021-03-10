import Header from '@/Header'
import Footer from '@/Footer'
import Head from 'next/head'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="preload" href="/fonts/Poppins-Regular.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Poppins-Bold.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/ZillaSlab-Regular.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/ZillaSlab-Bold.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/ZillaSlab-SemiBold.ttf" as="font" crossOrigin="" />
      </Head>
      <Header />
      <div className="content">{children}</div>
      <Footer />
      <style jsx>
        {`
          .content {
            margin-top: 70px;
          }
        `}
      </style>
    </>
  )
}

export default Layout
