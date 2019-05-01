import React from "react";
import ListItem from "./ListItem";

/**
 * Interactive list item.
 *
 * Use with a `NavList` for an interactive list.
 *
 * All `ListItem` props are supported.
 */
const NavListItem = ({ children, ...other }) => (
  <ListItem button {...other}>
    {children}
  </ListItem>
);

export default NavListItem;
