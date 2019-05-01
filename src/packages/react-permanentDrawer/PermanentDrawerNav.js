import React from "react";
import classnames from "classnames";

const PermanentDrawerNav = ({ className, children, ...other }) => (
  <nav
    className={classnames(
      "mdc-drawer",
      "mdc-drawer--permanent",
      "mdc-typography",
      className
    )}
    {...other}
  >
    {children}
  </nav>
);

export default PermanentDrawerNav;
