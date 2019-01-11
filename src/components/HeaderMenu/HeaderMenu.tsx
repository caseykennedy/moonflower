import * as React from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { toggleSidebar } from "../../store"
import { Container, Label, Menu, Icon } from "semantic-ui-react"
import { MenuProps } from "../Menu"
import { Box } from "rebass"

interface HeaderMenuProps extends MenuProps {
  dispatch?: Dispatch<any>
  inverted?: boolean
}

export const HeaderMenu = ({
  items,
  pathname,
  Link,
  inverted,
  dispatch
}: HeaderMenuProps) => (
  <Container>
    <Box width={1} bg="white" color="black" p={30}>I am Box.</Box>
    <Menu size="large" pointing secondary inverted={inverted}>
      <Menu.Item
        as="a"
        className="mobile only"
        icon="sidebar"
        onClick={() => dispatch && dispatch(toggleSidebar())}
      />
      <Menu.Item className="mobile hidden">moonflower</Menu.Item>
      {items.map(item => {
        const active = item.exact
          ? pathname === item.path
          : pathname.startsWith(item.path)
        return (
          <Menu.Item
            as={Link}
            className="mobile hidden"
            name={item.name}
            to={item.path}
            key={item.path}
            active={active}
          />
        )
      })}
    </Menu>
  </Container>
)

export default connect()(HeaderMenu)
