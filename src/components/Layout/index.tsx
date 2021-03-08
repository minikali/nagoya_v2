import Header from '@/Header'
import Footer from '@/Footer'
import style from './Layout.module.scss'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  )
}

export default Layout
