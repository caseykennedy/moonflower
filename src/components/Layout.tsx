import * as React from 'react'

import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../theme/theme'

import 'prismjs/themes/prism-okaidia.css'

import Header from './Header'
import EmailCapture from '../components/EmailCapture'
import Separator from '../components/Separator'
import Footer from '../sections/Footer'

// export const menuItems = [
//   { name: 'Home', path: '/', exact: true, icon: 'home', inverted: true },
//   { name: 'About', path: '/about/', exact: true, icon: 'info circle' },
//   { name: 'Blog', path: '/blog/', exact: false, icon: 'newspaper' }
// ]

export interface LayoutProps {
  children: any
}

const Layout = (props: LayoutProps) => {
  // const { pathname } = props.location
  // // const isHome = pathname === "/"

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
          <div>
            <Header />
            {props.children}
            <EmailCapture />
            <Separator bg='paleMoon' />
            <Footer />
          </div>
      </ThemeProvider>
      <GlobalStyle />
    </React.Fragment>
  )
}

export default Layout

// export const withLayout = <P extends object>(
//   WrappedComponent: React.ComponentType<P>
// ) =>
//   class WithLayout extends React.Component<P & LayoutProps> {
//     render() {
//       return (
//         <Layout>
//           <WrappedComponent {...this.props} />
//         </Layout>
//       )
//     }
//   }
