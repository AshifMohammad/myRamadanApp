import React from "react";
import { NavListItem } from "../react-listitem";

/**
 * Used to create a navigation list.
 */
const DrawerList = ({ children, ...other }) => (
  <NavListItem {...other}>{children}</NavListItem>
);

export default DrawerList;
