import * as React from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'

import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../theme/theme'

import 'prismjs/themes/prism-okaidia.css'
import { Segment, Sidebar } from 'semantic-ui-react'

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
  location: {
    pathname: string
  }
  children: any
}

const Layout = (props: LayoutProps) => {
  // const { pathname } = props.location
  // // const isHome = pathname === "/"

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <div>
            <Header />
            {props.children}
            <EmailCapture />
            <Separator bg='paleMoon' />
            <Footer />
          </div>
        </Provider>
      </ThemeProvider>
      <GlobalStyle />
    </React.Fragment>
  )
}

export default Layout

export const withLayout = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) =>
  class WithLayout extends React.Component<P & LayoutProps> {
    render() {
      return (
        <Layout location={this.props.location}>
          <WrappedComponent {...this.props} />
        </Layout>
      )
    }
  }
