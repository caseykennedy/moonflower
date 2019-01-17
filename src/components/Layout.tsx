import * as React from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'

import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../theme/theme'

import 'prismjs/themes/prism-okaidia.css'
import { Segment, Sidebar } from 'semantic-ui-react'

import Header from './Header/Header'

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
          <Sidebar.Pushable as={Segment}>
            {/* <SidebarMenu
              Link={Link}
              pathname={pathname}
              items={menuItems}
              visible={false}
            /> */}
            <Sidebar.Pusher style={{ minHeight: '100vh' }}>
              {/* Header */}
              {/* {isHome ? null : (
                <HeaderMenu Link={Link} pathname={pathname} items={menuItems} />
              )} */}

              <Header />

              {/* Render children pages */}
              <div>{props.children}</div>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
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
