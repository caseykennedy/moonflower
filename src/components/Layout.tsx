import * as React from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'
import SEO from './SEO'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../theme/theme'

import 'prismjs/themes/prism-okaidia.css'
import { Segment, Sidebar } from 'semantic-ui-react'

import Header from './Header'

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
  customSEO: boolean
}

const Layout = ({location, children, customSEO}: LayoutProps) => {
  // const { pathname } = props.location
  // // const isHome = pathname === "/"

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <div>
            <Header />
            {children}
          </div>
        </Provider>
      </ThemeProvider>
      {/* {!customSEO && <SEO />} */}
      <GlobalStyle />
    </React.Fragment>
  )
}

Layout.defaultProps = {
  customSEO: false,
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
