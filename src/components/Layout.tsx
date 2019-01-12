import { Link } from "gatsby"
import * as React from "react"
import { Provider } from "react-redux"
import { store } from "../store"

import GlobalStyle from "../styles/global"
import "../css/responsive.css"
import "../css/semantic.min.css"
import "prismjs/themes/prism-okaidia.css"

import { Box } from "rebass"
import { Segment, Icon, Container, Sidebar } from "semantic-ui-react"

import Header from "./Header/Header"
import SidebarMenu from "./SidebarMenu/SidebarMenu"

import { ThemeProvider } from "styled-components"
import theme from "../theme"

export const menuItems = [
  { name: "Home", path: "/", exact: true, icon: "home", inverted: true },
  { name: "About", path: "/about/", exact: true, icon: "info circle" },
  { name: "Blog", path: "/blog/", exact: false, icon: "newspaper" }
]

export interface LayoutProps {
  location: {
    pathname: string
  }
  children: any
}

const Layout = (props: LayoutProps) => {
  const { pathname } = props.location
  // const isHome = pathname === "/"

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Sidebar.Pushable as={Segment}>
            <SidebarMenu
              Link={Link}
              pathname={pathname}
              items={menuItems}
              visible={false}
            />
            <Sidebar.Pusher style={{ minHeight: "100vh" }}>
              {/* Header */}
              {/* {isHome ? null : (
                <HeaderMenu Link={Link} pathname={pathname} items={menuItems} />
              )} */}

              <Header />

              {/* Render children pages */}
              <div>{props.children}</div>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Provider>
      </ThemeProvider>
      <GlobalStyle />
    </div>
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
